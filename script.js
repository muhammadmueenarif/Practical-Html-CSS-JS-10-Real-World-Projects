// we can do this by following method also but there is some error in logic.
function calculatePrice() {
  let loanAmount = parseFloat(document.getElementById("loan-amount").value);
  let intrestRate = parseFloat(document.getElementById("intrest-rate").value);
  let loanTime = parseFloat(document.getElementById("loan-time").value);

  if (isNaN(loanAmount) || isNaN(intrestRate) || isNaN(loanTime)) {
    // alert('please enter valid value in all fields');
    //or
    document.querySelector(".result-box").style.height = "20vh";
    document.getElementsByTagName("p")[0].innerHTML = `<br/> Please enter valid value in all fields`;
    document.getElementsByTagName("p")[0].style.color = "red";
  } else {
    let monthlyIntrest = intrestRate / 100 / 12;
    let totalPayments = loanTime;
    let monthlyPayment=(loanAmount*monthlyIntrest)/(1-Math.pow(1+ monthlyIntrest, -totalPayments));

    let totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    //increase height of box with class result-box.
    document.querySelector(".result-box").style.height = "20vh";
    document.getElementsByTagName("p")[0].innerHTML = `<br/> Monthly Payment:${monthlyPayment.toFixed(2)} <br/> <br/> Total Intrest: ${totalInterest.toFixed(2)}`;
    document.getElementsByTagName("p")[0].style.color = "black";
    //toFixed function is used to display how much values after decimal.
  }
}
