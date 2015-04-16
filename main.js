var content;

function setContent() {

    content = document.getElementById('message2').value;
    console.log(content);
    }

function sendMail() {


	var link = "mailto:"+escape(document.getElementById('email').value)
             + "?cc=cs179@harvard.edu"
             + "&subject=" + escape("Weather Reminder")
             + "&body=" + escape(content);	


    

    window.location.href = link;
    }