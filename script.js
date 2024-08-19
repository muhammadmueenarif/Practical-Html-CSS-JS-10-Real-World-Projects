// rgb color generator using js. three lines of red green and blue color. by default set to 128. as 
// we move line forward and backward, it will change color accordingly. below are two boxes. one is button
// and other will display color code of the color that is set. when we click button, it will copy the code 
// to clipboard and show alert that colorcode copy to clipboard.

function Checker() {
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    document.getElementById('output').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById('rgb-code').innerHTML = `rgb(${red}, ${green}, ${blue})`;
}

setInterval(Checker, 20);

function copyCode() {
    var colorcode = document.getElementById('rgb-code').innerHTML;
    navigator.clipboard.writeText(`${colorcode}`)
    .then(()=>{
        alert("Color code copied to clipboard");
    })
    .catch((error)=> {
        console.error('Error copying text: ', error);
    });
    ;
}