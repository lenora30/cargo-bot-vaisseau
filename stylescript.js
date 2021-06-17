var camButton = document.getElementById("camInButton");
var imgButton = document.getElementById("imgInButton");
var phoneButton = document.getElementById("phoneInButton");
var modal = document.getElementById("modal");
var fileInput = document.getElementById("fileIn");
var imgInput = document.getElementById("imgInput");
var w = window.innerWidth;
var h = window.innerHeight;


camButton.onclick = function() {
	modal.style.display = "flex";
	TopCodes.startVideoScan("video-canvas");
}

imgButton.onclick = function() {
	if (fileInput.style.display == "none") {
		fileInput.style.display = "block";

	} else {
		fileInput.style.display = "none";
	}
	
}

fileInput.oninput = function() {
	modal.style.display = "flex";
}

closeButton.onclick = function() {
	modal.style.display = "none";
	TopCodes.stopVideoScan('video-canvas');
}