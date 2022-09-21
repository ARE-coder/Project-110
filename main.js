Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
})
var cam = document.getElementById("Cam");

Webcam.attach("#Cam");
 function Capture()
 {
   Webcam.snap(function(data_uri){
       document.getElementById("screenshot").innerHTML = "<img id='picture' src = '" + data_uri + "' height = 300px width=350px> </img>"
   });
}
console.log("ml5 version is " + ml5.version);
 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FNskVrLS8/model.json", modelLoaded);

 function modelLoaded()
 {
    console.log("The ml5 model has been intiated and it is ready! ")
 }

 function identify()
 {
    var img = document.getElementById("picture");
    classifier.classify(img, gotResult)
 }

 function gotResult(error, results)
 {
       if(error)
       {
        console.error(error);
       }else{
        console.log(results)
           var data = ""
            var con = results[0].confidence * 100
           document.getElementById("confidence").innerHTML = "Confidence : " + con.toFixed(3) + "%"
           

           data = results[0].label 
           var synth = window.speechSynthesis;
        if ( data == "Stop")
        {
            document.getElementById("gesture").innerHTML = data + "  <span>&#9995;</span>"
            var utterThis = new SpeechSynthesisUtterance("Stop now this is the police");
                  synth.speak(utterThis);
        }else if( data == "Best")
        {
            document.getElementById("gesture").innerHTML = data + "  <span>&#128077;</span>"
            var utterThis = new SpeechSynthesisUtterance("Good Job");
                  synth.speak(utterThis);
        }else if( data == "Left Point")
        {
            document.getElementById("gesture").innerHTML = data + "  <span>&#128072;</span>"
            var utterThis = new SpeechSynthesisUtterance("It was him ");
                  synth.speak(utterThis);
        }else if( data == "Right Point")
        {
            document.getElementById("gesture").innerHTML = data + "  <span>&#128073;</span>"
            var utterThis = new SpeechSynthesisUtterance("It was her");
                  synth.speak(utterThis);
        }else if( data == "Victory")
        {
            document.getElementById("gesture").innerHTML = data + "  <span>&#9996;</span>"
            var utterThis = new SpeechSynthesisUtterance("GOAL!");
                  synth.speak(utterThis);
        }
           
           
           
           
          



       }
 }
 