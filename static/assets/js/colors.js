// base on https://krazydad.com/tutorials/makecolors.php
function RGB2Color(r,g,b) { return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b); }
function byte2Hex(n) {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}
function makeColorGradient(frequency1, frequency2, frequency3, phase1, phase2, phase3, center, width, len) {
    if (center == undefined)   center = 128;
    if (width == undefined)    width = 127;
    if (len == undefined)      len = 50;
    for (let i = 0; i < len; ++i) {
        const red = Math.sin(frequency1*i + phase1) * width + center;
        const grn = Math.sin(frequency2*i + phase2) * width + center;
        const blu = Math.sin(frequency3*i + phase3) * width + center;
        let square = div.cloneNode();
        square.className = "square";
        square.style.backgroundColor = RGB2Color(red,grn,blu);
        palette.appendChild(square);
    }
}
const div = document.createElement('div');
const palette = div.cloneNode();
palette.className = "palette";
   // center = 128, width = 127
   makeColorGradient(.3,.3,.3,0,2,4, 128,127);
document.body.appendChild(palette);