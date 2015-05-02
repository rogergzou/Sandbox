function hintme() {
    alert("hi");
}

var content = "default";
    var _if = null;
    var _weather = null;
    var _else = null;
/*function refreshPage()
{
    jQuery.mobile.changePage(window.location.href, {
        allowSamePageTransition: true,
        transition: 'none',
        reloadPage: true
    });
}
*/
//$('haihai').click(alert("fef"));
//$("haihai").click(refreshPage());


// function setContent() {

//     content = document.getElementById('message2').value;

//     _if = document.getElementById('_if').value;
//     _else = document.getElementById('_else').value;
//     _weather = document.getElementById('_weather').value;

//     if(!(_if == "if"&&_else =="else"&&_weather=="weather"))
//         alert("Check if you have errors.");


//     console.log(content);

//     }

function sendMail() {


        var link = "mailto:"+escape(document.getElementById('email').value)
             + "?cc=cs179@harvard.edu"
             + "&subject=" + escape("Weather Reminder")
             + "&body=" + escape(content);      


    window.location.href = link;
    }


function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
//window.onload = function what(){
var urlParams = parseURLParams(window.location.href);
//console.log(urlParams);
//console.log(urlParams["varname0"][0]);
//console.log(urlParams["imgsrc"]);
//console.log(urlParams["imgsrc"][0]);
if (urlParams) {
console.log(urlParams);
if ("imgsrc" in urlParams) {
        var kkk = urlParams["imgsrc"][0];
        var strit = '<img src="';
        var end = '">';
        console.log(strit + kkk + end);
//document.body.innerHTML = strit + kkk + end;
        document.getElementById("wtfmate").innerHTML = strit + kkk + end;
        
}
} 
//};
//
//
$('#wp-var4-haihai').live('pageinit', function(){
    alert("Welcome");
var urlParams = parseURLParams(window.location.href);
//console.log(urlParams);
//console.log(urlParams["varname0"][0]);
//console.log(urlParams["imgsrc"]);
//console.log(urlParams["imgsrc"][0]);
if (urlParams) {
console.log(urlParams);
if ("imgsrc" in urlParams) {
        var kkk = urlParams["imgsrc"][0];
        var strit = '<img src="';
        var end = '">';
        console.log(strit + kkk + end);
//document.body.innerHTML = strit + kkk + end;
        document.getElementById("wtfmate").innerHTML = strit + kkk + end;
        
}
} 
});

//possibly faulty twitter code
//!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
//possibly faulty twitter code
//+window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));+
