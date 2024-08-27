// love calculator

function calculateLove() {
    var yourName = document.getElementById('yourname').value.trim();
    var loverName = document.getElementById('partnername').value.trim();
    if (yourName == "" || loverName == "") {
        alert("Please Enter Both Name");
    } else {
        var love = Math.floor(Math.random() * 101); // we use 101 because there is possibility that love is 100%.
        if (love < 30) {
            document.getElementById('love').innerHTML = `${yourName} and ${loverName} Love Percentage is ${love}%`;
            document.getElementById('details').innerHTML = "Not a great match! Keep Looking.";
            //clear input after showing result
            document.getElementById('yourname').value = "";
            document.getElementById('partnername').value = "";
        } else if (love >= 30 && love < 70) {
            document.getElementById('love').innerHTML = `${yourName} and ${loverName} Love Percentage is ${love}%`;
            document.getElementById('details').innerHTML = "You guys are okay, but you can do better!";
            document.getElementById('yourname').value = "";
            document.getElementById('partnername').value = "";
        } else {
            document.getElementById('love').innerHTML = `${yourName} and ${loverName} Love Percentage is ${love}%`;
            document.getElementById('details').innerHTML = "Great match. You guys are meant to be!";
            document.getElementById('yourname').value = "";
            document.getElementById('partnername').value = "";
        }
    }
}