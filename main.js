Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
})
var cam = document.getElementById("Cam");

Webcam.attach("#Cam");
 function snapshot()
 {
   Webcam.snap(function(data_uri){
       document.getElementById("screenshot").innerHTML = "<img id='picture' src = '" + data_uri + "' height = 300px width=350px> </img>"
   });
}
console.log("ml5 version is " + ml5.version);
 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ausY-qXgM/model.json", modelLoaded);

 