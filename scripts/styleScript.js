var camButton = document.getElementById("camInButton");
var imgButton = document.getElementById("imgInButton");
var phoneButton = document.getElementById("phoneInButton");
var reloadButton = document.getElementById("reloadButton");
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImg");
var modalQr = document.getElementById("modalQr");
var closeButton = document.getElementById("closeButton");
var closeButtonImg = document.getElementById("closeButtonImg");
var closeButtonQr = document.getElementById("closeButtonQr");
var closeButtonSelect = document.getElementById("closeButtonSelect");
var fileInput = document.getElementById("fileInput");
var imgInput = document.getElementById("imgInput");
var selectorCam = document.getElementById('selectorCam');
var videoSelect = document.getElementById('videoSource');
var w = window.innerWidth;
var h = window.innerHeight;
var jsonImg;


camButton.onclick = function() {
	if (videoSelect.value == "") {
		if (selectorCam.style.display == "none") {
			selectorCam.style.display = "flex";
		} else {
			selectorCam.style.display = "none";
		}	
	} else {
		modal.style.display = "flex";
		TopCodes.startVideoScan("video-canvas");
		selectorCam.style.display = "none";
	}
}

videoSelect.oninput = function() {
	modal.style.display = "flex";
	TopCodes.startVideoScan("video-canvas");
	selectorCam.style.display = "none";
}

fileInput.oninput = function() {
  modalImg.style.display = "flex";

  var imageLoader = document.getElementById('fileInput');
  imageLoader.addEventListener('change', handleImage, false);
  var canvas = document.getElementById('image-canvas');
  var ctx = canvas.getContext('2d');

  function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
      var img = new Image();
      img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        jsonImg = scanCanvas(img);
      }
      img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
  }
}

phoneButton.onclick = function() {
	modalQr.style.display = "flex";
	makeCode();
}

closeButtonImg.onclick = function() {
	modalImg.style.display = "none";
}

closeButton.onclick = function() {
	modal.style.display = "none";
	TopCodes.stopVideoScan('video-canvas');
}

closeButtonQr.onclick = function() {
	modalQr.style.display = "none";
}

closeButtonSelect.onclick = function() {
	selectorCam.style.display = "none";
}

document.getElementById("scanButtonImg").onclick = function(){
	var json = JSON.parse(jsonImg);
  scan(json.topcodes, true);  
  document.getElementById("modalImg").style.display = "none";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
		document.getElementById("inputMethod").style.position = "fixed";
		document.getElementById("inputMethod").style.top = "0";
	} else {
		document.getElementById("inputMethod").style.position = "absolute";
		document.getElementById("inputMethod").style.top = "auto";
	}
}