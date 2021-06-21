var camButton = document.getElementById("camInButton");
var imgButton = document.getElementById("imgInButton");
var phoneButton = document.getElementById("phoneInButton");
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImg");
var fileInput = document.getElementById("fileIn");
var imgInput = document.getElementById("imgInput");
var w = window.innerWidth;
var h = window.innerHeight;
var jsonImg;


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
                ctx.drawImage(img,0,0);
                jsonImg = scanCanvas(img);
				console.log(jsonImg);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);     
    }
}

closeButtonImg.onclick = function() {
	modalImg.style.display = "none";
}

closeButton.onclick = function() {
	modal.style.display = "none";
	TopCodes.stopVideoScan('video-canvas');
}

document.getElementById("scanButtonImg").onclick = function(){
	var json = JSON.parse(jsonImg);
    scan(json.topcodes);  
    document.getElementById("modalImg").style.display = "none";
}