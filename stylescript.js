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

scanButton.onclick = function() {
	TopCodes.stopVideoScan('video-canvas');
	modal.style.display = "none";
	send();
}

function send() {
	console.log(tableau_instruc);
	var array = tableau_instruc;
	var hash = btoa(JSON.stringify(array));
	console.log(hash);
	var frame = document.getElementById("frame");
	frame.src="cargo-not/index.html#"+hash;
}