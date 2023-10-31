var SpeechRecognition = window.webkitSpeechRecognition
var recognition=new SpeechRecognition()

function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
    
}

recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content
    if (content=="take my selfie"){
        speak()
    }
}

camera=document.getElementById("camera")
Webcam.set({
  width:360,
  height:250,
  image_format:'jpeg',
  jpeg_quality:90
})

function speak(){
    var synth=window.speechSynthesis
    speak_data="taking your selfie in 5 seconds"
    var utterthis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)
    Webcam.attach(camera)


    setTimeout(function()  {
        img_id="selfie1"
        takesnapshot()
        speak_data="taking your selfie in 10 seconds"
    var utterthis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)
        
    }, 5000);     
    setTimeout(function()  {
        img_id="selfie2"
        takesnapshot()
        speak_data="taking your selfie in 15 seconds"
    var utterthis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)
        
    }, 10000);   
    setTimeout(function()  {
        img_id="selfie3"
        takesnapshot()
        
        
    }, 15000);     
  

}


function takesnapshot(){
     Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie_image" src="'+data_uri+'">'
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie_image" src="'+data_uri+'">'
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie_image" src="'+data_uri+'">'
        }
       
     })
}

function Save(){
    link=document.getElementById("link")
    img=document.getElementById("selfie_image").src 
    link.href=img
    link.click()

}