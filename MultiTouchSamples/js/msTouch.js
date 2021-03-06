﻿

var canvas;
var ctx;
var w = 0;
var h = 0;
var pointerValues = new Object();
h['one'] = 1;
h['two'] = 2;
h['three'] = 3;

function update() {

    var nw = window.innerWidth;
    var nh = window.innerHeight;


    if ((w != nw) || (h != nh)) {
        w = nw;
        h = nh;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = w;
        canvas.height = h;
    }
};

function ol() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    timer = setInterval(update, 30);

    canvas.addEventListener('MSPointerMove', function (event) {
        if (event.button > 0 || event.pointerType == 'touch' || event.pointerType == event.MSPOINTER_TYPE_TOUCH) {

            event.preventDefault();
            makeCircle(event.pageX, event.pageY);
        }
    });

    canvas.addEventListener('MSPointerUp', function (event) {
        if (event.button > 0 || event.pointerType == 'touch' || event.pointerType == event.MSPOINTER_TYPE_TOUCH) {

            event.preventDefault();
            ctx.clearRect(0, 0, w, h);
            makeCircle(event.pageX, event.pageY);
        }
    });
};

function makeCircle(x, y) {

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI, true);

    ctx.fillStyle = "rgba(0, 0, 200, 0.2)";
    ctx.fill();

    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "rgba(0, 0, 200, 0.8)";
    ctx.stroke();
    console.log('drawn circle at ' + x + ',' + y);
}