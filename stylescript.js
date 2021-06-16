var camButton = document.getElementById("camInButton");
var imgButton = document.getElementById("imgInButton");
var phoneButton = document.getElementById("phoneInButton");
var modal = document.getElementById("modal");
var fileInput = document.getElementById("fileIn");
var imgInput = document.getElementById("imgInput");
var w = window.innerWidth;
var h = window.innerHeight;

function scale(canvasId) {
	var wRatio = (w-50)/1280;
	var hRatio = (h-50)/720

	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext('2d');

	if (wRatio < 1 && wRatio < hRatio) {		
		ctx.scale(wRatio, wRatio);
	} else if (hRatio < 1) {
		ctx.scale(hRatio, hRatio);
	}
}

camButton.onclick = function() {
	scale("video-canvas");
	modal.style.display = "block";
	TopCodes.startVideoScan("video-canvas");
}

imgButton.onclick = function() {
	fileInput.style.display = "block";
}

fileInput.oninput = function() {
	modal.style.display = "block";
}

stopButton.onclick = function() {
	modal.style.display = "none";
	TopCodes.stopVideoScan('video-canvas');
}