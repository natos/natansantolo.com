+++
title = "Instagramas"
description = "Show the latest Instagram pictures."
tags = [ "components", "javascript", "instagram", "opensource"]
date = "2016-04-14"
categories = [
  "JavaScript",
  "OpenSource"
]
slug = "instagramas"
+++

![Instagramas](/assets/images/instagramas/instagramas.png)

I built this simple component for [Marcela's Website](http://www.marcelaviola.com.ar), the idea is to show the latest pictures you've published in your Instagram.

I tried to make it flexible by adding a few configurations, you can choose the type of render, amount of images, also some flags to hide tags and favorites. [See all the possible configurations and examples](http://natos.github.io/instagramas/).

{{< instagramas count="4" show-likes="true" show-tags="true" >}}

I also made a [test page](http://natos.github.io/instagramas/) where you can find [more example implementations](http://natos.github.io/instagramas/) and some notes about styling. Also if you like to hack things go and [grab the code in github](https://github.com/natos/instagramas).

I'll keep improving this little project, its quite fun and there's quite a lot of opportunities. As soon as I make some time, the first thing I want to fix is the CSS implementation and documentation.

Last example, here is my last Instagram:

{{< instagramas count="1" show-likes="true" show-tags="true" render="standard_resolution" >}}

I hope you find this useful :)