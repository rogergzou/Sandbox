
    var content = "default";
    var _if = null;
    var _weather = null;
    var _else = null;


function setContent() {

    content = document.getElementById('message2').value;

    _if = document.getElementById('_if').value;
    _else = document.getElementById('_else').value;
    _weather = document.getElementById('_weather').value;

    if(!(_if == "if"&&_else =="else"&&_weather=="weather"))
        alert("Check if you have errors.");


    console.log(content);

    }

function sendMail() {


	var link = "mailto:"+escape(document.getElementById('email').value)
             + "?cc=cs179@harvard.edu"
             + "&subject=" + escape("Weather Reminder")
             + "&body=" + escape(content);	


    window.location.href = link;
    }



