var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();   //creating an object named recognition uing web speech api

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();   //calling start() from speech api for the object recognition
}

recognition.onresult=function(event){
    console.log(event);

    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;

    if(content=="take my selfie"){
        console.log(content);
        speak(); //calling speak()
    }
    
}

function speak(){
    var synth=window.speechSynthesis; //storing api in a variable
    speak_data="taking your selfie in five seconds"
    var utterthis=new SpeechSynthesisUtterance(speak_data); // passing speak data to an object
    synth.speak(utterthis) // calling predefined speak()
    Webcam.attach(camera) // attaching Webcam to camera variable
    setTimeout(function(){
        take_snapshot();
        save();
    },5000)
}

// giving property to Webcam in the format provided by Webcam.js library
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera"); // storing empty div inside variable cameras

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_uri+"'>"
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click()
}