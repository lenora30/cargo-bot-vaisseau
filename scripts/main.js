var videoSelect = document.getElementById('videoSource');
var qrcode = new QRCode("qrcode", {width: 500, height: 500});
var peer = new Peer({
	config: {'iceServers': [
		{ url: 'stun:stun.l.google.com:19302' },
		{ url: 'turn:cargobot-tangible.u-strasbg.fr', username: 'azertyuiop', credential: 'azertyuiop' }
	]}
}); 



// register a callback function with the TopCode library
TopCodes.setVideoFrameCallback("video-canvas", function (jsonString) {

    // convert the JSON string to an object
    var json = JSON.parse(jsonString);

    // get the list of topcodes from the JSON object
    topcodes = json.topcodes;

    for (i = 0; i < topcodes.length; i++) {
        if (topcodes[i].code >= 103 && topcodes[i].code <= 143) {
            var image = new Image();
            image.src = "img/instruction/" + topcodes[i].code.toString() + ".svg";
            ctx.translate(topcodes[i].x, topcodes[i].y);
            ctx.drawImage(image, -topcodes[i].radius * 1.5, -topcodes[i].radius * 1.5, topcodes[i].radius * 3, topcodes[i].radius * 3);
            ctx.translate(-topcodes[i].x, -topcodes[i].y);
        }
        if (topcodes[i].code >= 157 && topcodes[i].code <= 181) {
            var image = new Image();
            image.src = "img/instruction/" + topcodes[i].code.toString() + ".svg";
            ctx.translate(topcodes[i].x, topcodes[i].y);
            ctx.drawImage(image, -topcodes[i].radius * 3, -topcodes[i].radius * 1.5, topcodes[i].radius * 4.5, topcodes[i].radius * 2.25);
            ctx.translate(-topcodes[i].x, -topcodes[i].y);

        }
    }

    document.getElementById("scanButton").onclick = function () {
        scan(json.topcodes, true);
        TopCodes.stopVideoScan('video-canvas');
        document.getElementById("modal").style.display = "none";
    }
});

var canvas = document.querySelector("#video-canvas");
var ctx = canvas.getContext('2d');



function getDevices() {
	// AFAICT in Safari this only gets default devices until gUM is called :/
	return navigator.mediaDevices.enumerateDevices();
}
  
function gotDevices(deviceInfos) {
	window.deviceInfos = deviceInfos; // make available to console
	// console.log('Available input and output devices:', deviceInfos);
	for (const deviceInfo of deviceInfos) {
		const option = document.createElement('option');
		option.value = deviceInfo.deviceId;
		if (deviceInfo.kind === 'videoinput') {
			option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
			videoSelect.appendChild(option);
		}
	}
}

// enumerate camera devices
getDevices().then(gotDevices);



function makeCode () {
	var peerId = peer.id;
	var address = "https://pinguee.github.io/cargo-not/mobile.html";
	// var address = window.location.origin + "/mobile.html";
	var qr = address + "#" + peerId; 
	qrcode.makeCode(qr);
}


// handle incoming data from phone
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