window.onload = init;
function init() {
	if (window.Event) document.captureEvents(Event.MOUSEMOVE);
	document.onmousemove = getCursorXY;
}

function getCursorXY(e) {
    document.getElementById('cursorY').value = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}
document.getElementById('pageHeight').value = document.body.scrollHeight;

let yAxis = document.getElementById('cursorY').value;
let windowHeight = document.body.scrollHeight;

if (yAxis >= windowHeight * 95 / 100) {
    console.log('test');
}