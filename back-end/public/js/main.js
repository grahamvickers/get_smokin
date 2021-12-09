window.onload = function() {

    var timeline = new TimelineMax();
    timeline.from("#main", .7, {y:50, autoAlpha: .5 }, 0)
    
}


function showNav() {
    document.getElementById("navOverCon").style.width = "100%";
}
  
function hideNav() {
    document.getElementById("navOverCon").style.width = "0%";
}