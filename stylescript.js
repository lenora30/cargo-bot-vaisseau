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
var fileInput = document.getElementById("fileIn");
var imgInput = document.getElementById("imgInput");
var selectorCam = document.getElementById('selectorCam');
var videoSelect = document.getElementById('videoSource');
var qrcode = new QRCode("qrcode", {width: 500, height: 500});
var peer = new Peer(); 
var w = window.innerWidth;
var h = window.innerHeight;
var jsonImg;


camButton.onclick = function() {
	if (videoSelect.value == "") {
		if (selectorCam.style.display == "none") {
			selectorCam.style.display = "block";
		} else {
			selectorCam.style.display = "none";
		}	
	} else {
		modal.style.display = "flex";
		TopCodes.startVideoScan("video-canvas");
		selectorCam.style.display = "none";
	}

	if (fileInput.style.display == "block") {
		fileInput.style.display = "none";
	}
}

videoSelect.oninput = function() {
	modal.style.display = "flex";
	TopCodes.startVideoScan("video-canvas");
	selectorCam.style.display = "none";
}

imgButton.onclick = function() {
	if (fileInput.style.display == "none") {
		fileInput.style.display = "block";
	} else {
		fileInput.style.display = "none";
	}
	if (selectorCam.style.display == "block") {
		selectorCam.style.display = "none";
	}	
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
	modalQr.style.display = "block";
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

document.getElementById("scanButtonImg").onclick = function(){
	var json = JSON.parse(jsonImg);
  scan(json.topcodes, true);  
  document.getElementById("modalImg").style.display = "none";
}

function getDevices() {
	// AFAICT in Safari this only gets default devices until gUM is called :/
	return navigator.mediaDevices.enumerateDevices();
}
  
function gotDevices(deviceInfos) {
	window.deviceInfos = deviceInfos; // make available to console
	console.log('Available input and output devices:', deviceInfos);
	for (const deviceInfo of deviceInfos) {
		const option = document.createElement('option');
		option.value = deviceInfo.deviceId;
		if (deviceInfo.kind === 'videoinput') {
			option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
			videoSelect.appendChild(option);
		}
	}
}

getDevices().then(gotDevices);

function makeCode () {
	var peerId = peer.id; 
	var adress = "https://pinguee.github.io/cargo-not/mobile.html";
	var qr = adress + "#" + peerId; 
	qrcode.makeCode(qr);
}

peer.on('connection', function(conn) {
	modalQr.style.display = "none";

  var canvas = document.getElementById('image-canvas');
  var ctx = canvas.getContext('2d');

  conn.on('data', data => {
    modalImg.style.display = "flex";

		if (data.filetype.includes('image')) {
			var bytes = new Uint8Array(data.file);
			var img = new Image();
			img.src = 'data:image/png;base64,' + encode(bytes);
      img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        jsonImg = scanCanvas(img);
      }
		}
	});
});

const encode = input => {
	const keyStr =
	  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	let output = ''
	let chr1, chr2, chr3, enc1, enc2, enc3, enc4
	let i = 0
  
	while (i < input.length) {
		chr1 = input[i++]
		chr2 = i < input.length ? input[i++] : Number.NaN // Not sure if the index
		chr3 = i < input.length ? input[i++] : Number.NaN // checks are needed here
	
		enc1 = chr1 >> 2
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
		enc4 = chr3 & 63
	
		if (isNaN(chr2)) {
			enc3 = enc4 = 64
		} else if (isNaN(chr3)) {
			enc4 = 64
		}
		output +=
			keyStr.charAt(enc1) +
			keyStr.charAt(enc2) +
			keyStr.charAt(enc3) +
			keyStr.charAt(enc4)
	}
	return output
}