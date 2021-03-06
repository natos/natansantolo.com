/*!
 * Instagrams.js
 *
 * Renders latest instagramas
 */

// (function($w, $d) {

    var $w = window,
        $d = document;

    // 'use strict';

    var API_PREFIX = 'https://api.instagram.com/v1/users/self/media/recent/?';

    /**
     * Default properties and values
     * @private @const data
     */
    var data = {
        'data-show-tags': {
            attributeName: 'showTags',
            defaultValue: false
        },
        'data-show-tags-count': {
            attributeName: 'showTagsCount',
            defaultValue: 1
        },
        'data-show-likes': {
            attributeName: 'showLikes',
            defaultValue: false
        },
        'data-render-type': {
            attributeName: 'renderType',
            defaultValue: 'thumbnail'
        },
        'data-count': {
            attributeName: 'count',
            defaultValue: 5
        }
    };

    /**
     * Templates map
     * @private @const template
     */
    var template = {
        'tag': '<span class="instagrama-tag">{{tag}}</span>',
        'loader': '<div class="spinner"><div class="dot1"></div><div class="dot2"></div></div>'
    };

    /**
     * DOM elements cache
     * @private @const elements
     */
    var HTMLElement = {
        _: (function(c) {
            var o = {};
            for (var i = 0; i < c.length; i += 1) {
                o[c[i]] = $d.createElement(c[i]);
            }
            return o;
        }(['div', 'figure', 'figcaption', 'img', 'a'])),
        new: function(e) {
            return HTMLElement._[e].cloneNode(false);
        }
    };

    /**
     * Returns if a variable is a boolean
     * @private @function isBoolean
     * @return {boolean} true if the passed variable is boolean
     */
    function isBoolean(b) {
        return typeof b === 'boolean' || (typeof b === 'object' && typeof b.valueOf() === 'boolean');
    }

    var count = 0, done = 0;

    function serialize(obj, prefix) {
        var str = [];
        for(var p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                str.push(typeof v == "object" ?
                    serialize(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");
    }

    function load(url) {
        var script = document.createElement('script'),
        done = 0;
        script.src = url;
        script.async = true;
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                done = true;
                script.onload = script.onreadystatechange = null;
                if ( script && script.parentNode ) {
                    script.parentNode.removeChild( script );
                }
            }
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    function get(url, params, callback) {
        var query = '';
        if (typeof params === 'function' && typeof callback === 'undefined') {
            callback = params;
        } else {
            query = serialize(params);
        }
        count += 1;
        var fname = 'phealer' + '_' + new Date().valueOf() + count;
        window[fname] = function (response) {
            callback && callback(response);
            try {
                delete window[fname];
            } catch (e) {}
            window[fname] = null;
        }
        load(url + query + "&amp;callback=" + fname);
    }

    /**
     * Creates a gallery of Instagramas using a valid Instagram access token
     * @private @class Instagramas
     * @param {HTMLElement} element - Placeholder element for Instagramas gallery
     */
    var Instagramas = function(element) {

        var $this = this;
        var access_token = element.getAttribute('data-access-token');

        if (access_token === undefined || access_token === null) {
            throw ("Instagramas missing access token: Instagramas needs access token to fetch information from instragram.");
        } else {
            element.removeAttribute('data-access-token');
        }

        $this.element = element;
        $this.children = [];
        $this.childrenLoaded = 1;

        for (var member in data) {
            $this[data[member].attributeName] = (isBoolean(data[member].defaultValue)) ?
            element.getAttribute(member) === "true" || data[member].defaultValue :
                element.getAttribute(member) || data[member].defaultValue;
        }

        var source = API_PREFIX + 'count=' + $this.count + '&amp;' + 'access_token=' + access_token;

        $this.loader = HTMLElement.new('div');
        // $this.loader = $d.createElement('div');
        $this.loader.className = 'loader';
        $this.loader.innerHTML = template.loader;
        $this.element.appendChild($this.loader);
        $this.element.setAttribute('data-state', 'initiated');

        $this.get(source, $this.create);
    };

    /**
     * @public @method childLoaded
     * @return this
     */
    Instagramas.prototype.childLoaded = function() {
        var $this = this;
        if ($this.children.length === $this.childrenLoaded) {
            $this.childrenLoaded = null;
            delete $this.childrenLoaded;
            return $this.ready();
        }
        $this.childrenLoaded += 1;
        return $this;
    };
    /**
     * @public @method ready
     * @return this
     */
    Instagramas.prototype.ready = function() {
        var $this = this;
        $this.element.setAttribute('data-state', 'ready');
        $this.element.removeChild($this.loader);
        return $this;
    };

    /**
     * Gets from the provided source though JSONP and executes the callback
     * @public @method get
     * @param {string} source - URL of the source of content
     * @return {object} this
     */
    Instagramas.prototype.get = function(source, callback) {
        var $this = this;
        $this.element.setAttribute('data-state', 'get:in-progress');
        // TODO: Handle error cases
        function success(response) {
            $this.element.setAttribute('data-state', 'get:success');
            callback.call($this, response);
        }
        get(source, success);
        return $this;
    };

    /**
     * Creates the gallery content from the provided Instagram's API response.
     * @public @method create
     * @param {object} response - Instagram's API response object.
     */
    Instagramas.prototype.create = function(response) {
        var $this = this;
        var i;
        if (!response.data) {
            return;
        }
        for (i = 0; i < response.data.length; i += 1) {
            $this.children.push(new Instagrama(response.data[i], $this));
        }
        $this.element.setAttribute('data-state', 'created');
        return $this;
    };

    /**
     * Creates a single Instagram picture
     * @private @class Instagrama
     * @param {object} $data - Object that describe a picture from Instragram's API Response.
     * @return {object} $this - Instagrama instance
     */
    var Instagrama = function($data, $parent) {

        if (!$data) {
            return this;
        }

        var $this = this;
        $this.parent = $parent;
        $this.data = $data;
        $this.render();

        return $this;
    };

    /**
     * Renders the content of the picture
     * @public @method render
     * @return {object} $this - Instagrama instance
     */
    Instagrama.prototype.render = function() {

        var $this = this,
            figure,
            tagscaption,
            likescaption,
            a, i, t, img,
            tags = '',
            likes = 0;

        figure = HTMLElement.new('figure');
        figure.className = 'instagrama-' + $this.data.type;

        // a = $d.createElement('a');
        a = HTMLElement.new('a');
        a.target = '_blank';
        a.className = 'instagrama';
        a.href = $this.data.link;
        figure.appendChild(a);

        img = HTMLElement.new('img');
        img.alt = $this.data.caption.text;
        img.src = $this.data.images[$this.parent.renderType].url;
        img.onload = function() {
            $this.parent.childLoaded.apply($this.parent, arguments);
        };
        a.appendChild(img);

        // likes
        if ($this.parent.showLikes) {
            likescaption = HTMLElement.new('figcaption');
            likescaption.className = 'instagrama-likes';
            likescaption.innerHTML = $this.data.likes.count;
            a.appendChild(likescaption);
        }

        // collect tags
        if ($this.parent.showTags) {
            t = $this.parent.showTagsCount || $this.data.tags.length;
            for (i = 0; i < t; i += 1) {
                if (!$this.data.tags[i]) {
                    continue;
                }
                tags += template.tag.replace('{{tag}}', $this.data.tags[i]);
            }
            tagscaption = HTMLElement.new('figcaption');
            tagscaption.className = 'instagrama-tags';
            tagscaption.innerHTML = tags;
            a.appendChild(tagscaption);
        }

        $this.parent.element.appendChild(figure);

        return $this;
    };

    var context = this;
    /**
     * @param {function} f The function to execute when the DOM is ready
     */
    function _r(f) {
        /in/.test(document.readyState)?
            setTimeout(function() { _r.call(context, f) },9):
            f.call(context)
    }
    /*
    * @private
    * Will find all instances of instagramas in the document
    */
    var instagramas = $d.querySelectorAll('.instagramas');
    if (instagramas !== undefined || instagramas !== null) {
        /**
        * @private
        * Instagramas namespace can be predefined by setting a string in the global
        * variable `_instagramas_namespace` with the name of your choosing, otherwise
        * will automatically use the defautl value `_Instagramas`.
        */
        var namespace = $w._instagramas_namespace || '_Instagramas';
        $w._instagramas_namespace = namespace;

        /**
        * @public
        * Define the namespace to store instagramas instances.
        */
        $w[namespace] = {
            collection: []
        };

        /*
        * Start, when DOM ready, create a Instagramas instance for each match.
        */
        _r(function start() {
            for (var i = 0; i < instagramas.length; i += 1) {
                $w[namespace].collection.push(new Instagramas(instagramas[i]));
            }
        });
    }

// }(window, document));