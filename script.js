// get userinput value and onclick of button, check whether it is ascii code or unicode. 

// var userInput = document.getElementById('input').value; if we use this out of function, then it will not work.
// because it will not give user value to function.


 function detectValue() {
    var userInput = document.getElementById('input').value;
   if (userInput=='') {
    document.getElementById('result').innerHTML = 'Please enter a value';
   }
   else {
    if (isAscii(userInput)) {
        document.getElementById('result').innerHTML = `"${userInput}" is ASCII`;
    } else {
        document.getElementById('result').innerHTML = `"${userInput}" is Unicode`;
    }
   // var unicode = userInput.codePointAt(0); // it returns unicode value of character.
   //clear input field.
   document.getElementById('input').value = '';
   }

} 

function isAscii(userInput) {
    return userInput.charCodeAt(0)<=127;    
}