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
var qrcode = new QRCode("qrcode");
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

				var ar = 1;

				if (ctx.canvas.width > window.innerWidth-40) {
					ar = (window.innerWidth-40)/ctx.canvas.width;
				}
				if (ctx.canvas.height > window.innerHeight-120) {
					ar = (window.innerHeight-40)/ctx.canvas.height;
				}

				document.getElementById("sannerImg").style.width = img.width*ar;
				document.getElementById("sannerImg").style.height = img.height*ar;
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
    scan(json.topcodes);  
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
	var elText = peer.id;

	console.log(peer.id);
	
	qrcode.makeCode(elText);
}

peer.on('connection', function(conn) {
	conn.on('data', function(data){
	  	// Will print 'hi!'
	  	console.log(data);
		modalQr.style.display = "none";
	});
});