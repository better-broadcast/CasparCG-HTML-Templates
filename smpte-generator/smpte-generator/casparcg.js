/*  ########################################################
    #                                                      #
    #                   SMPTE GENERATOR                    #
    #            by BETTER BROADCAST SOLUTIONS             #
    #                                                      #
    ########################################################

    This Template is made for CasparCG 2.3.0 LTS
	    it also should work fine with other versions

    © 2021 Jason Kuhr
*/

function play () {}
function next () {}
function stop () { gsap.to(".main", {duration: 0, opacity: 0}); setTimeout(function() {window.close();}, 500); }
function update (raw) {
    var txt = raw;
    var obj = JSON.parse(txt);
    var string = "";
    if (obj.f0 != "" && obj.f0 != null) { string = "<div id=\"f0\">" + obj.f0 + "</div>"; }
    if (obj.f1 != "" && obj.f1 != null) { string += "<div id=\"f1\">" + obj.f1 + "</div>"; }
    if (obj.f2 != "" && obj.f2 != null) { string += "<div id=\"f1\">" + obj.f2 + "</div>"; }
    document.getElementById("text").innerHTML = string;
}

function sysclock(){
  var hours, minutes, seconds;
  var today;
  today = new Date(); hours = today.getHours();  minutes = today.getMinutes(); seconds = today.getSeconds();
  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  document.getElementById("clock").innerHTML = hours + ":" + minutes + ":"  + seconds;
}

window.onload = function() { sysclock(); setInterval(sysclock, 500); }