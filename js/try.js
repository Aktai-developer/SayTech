$(document).ready(function(){

    $.each($('div.progress-bar'),function(){
        $(this).css('width', $(this).attr('aria-valuenow')+'%');
    });


});

function togglePlanet(Planet,gravity,diameter,length,mass) {
    document.getElementById("planet-icon").style.backgroundImage="url('http://icons.veryicon.com/png/Nature/Solar%20System/"+Planet+".png')";
    document.getElementById("glow").innerHTML=Planet;

    document.getElementById("gravity").innerHTML='Gravity';
    document.getElementById("diameter").innerHTML='Diameter';
    document.getElementById("length").innerHTML='Length of the Day';
    document.getElementById("mass").innerHTML='Mass';

    var grav=(gravity*100)/3;
    var diam=(diameter*100)/12;
    var len=(length*100)/180;
    var ma=(mass*100)/317;


    document.getElementById("gravprog").style.width= grav+'%';
    document.getElementById("diamprog").style.width= diam+'%';
    document.getElementById("lenprog").style.width= len+'%';
    document.getElementById("massprog").style.width= ma+'%';




    document.getElementById("gravprog").innerHTML='<span>'+gravity+' (m/s2) </span>';
    document.getElementById("diamprog").innerHTML='<span>'+Math.round(diameter*12.756).toFixed(2)+' (km) </span>';
    document.getElementById("lenprog").innerHTML='<span>'+Math.round(length*24).toFixed(2)+' (hours) </span>';
    document.getElementById("massprog").innerHTML='<span>'+(ma*5.97).toFixed(5)+' (10^24kg) </span>';

}