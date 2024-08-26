    //for one box. on every refresh, it changes background color and shows color code in box.
    // var red  = Math.floor(Math.random()*256);
    // var green = Math.floor(Math.random()*256);
    // var blue  = Math.floor(Math.random()*256);
    // document.getElementsByClassName("box")[0].style.background = `rgb(${red}+${green}+${blue})`;   
    // document.getElementById('colorcode').innerHTML = `rgb(${red},${green},${blue})`;

// for multiple boxes with same class. change background color of every box on each refresh and show
// code of each color in its box. 

var boxes = document.getElementsByClassName('box');
var btn = document.getElementsByClassName('copy-btn');
 //store all color codes in array so we have all the color codes at the end.
 var colorCodes = [];

for(var i = 0; i < boxes.length; i++){
    var red  = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue  = Math.floor(Math.random()*256);
    document.getElementsByClassName('box')[i].style.background = `rgb(${red},${green},${blue})`;
    document.getElementsByClassName('colorcode')[i].innerHTML = `rgb(${red},${green},${blue})`;
   
    colorCodes.push(`rgb(${red},${green},${blue})`);
    }

    console.log(colorCodes);
    

function copyCode(index){
    navigator.clipboard.writeText(colorCodes[index]);
    alert("Copied to clipboard!");
}


    
