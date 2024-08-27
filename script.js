// the formula for bmi is bmi = weight in kg / height in m square.
// we are getting height in feet and inches so first we will convert it in meters.
// bmi categories. 
// bmi < 18.5 then underweight. if >=18.5 <=24.9 then normal weight. if >=25 and <=29.9 then overweight.
// >= 30 then obesity.

document.getElementById("bmiform").addEventListener('submit', function(e) {
    e.preventDefault(); // to avoid submit on each time.

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (gender && age && heightFeet && heightInches && weight) {
        const height = ((heightFeet * 12) + heightInches) * 0.0254; // convert height to meters.
        const bmi = weight / (height * height); // calculate bmi.
        const resultElement = document.getElementById('result');

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal Weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
        let resultMessage = 'Your BMI: ' + bmi.toFixed(2) + '<br/>';
        resultMessage += 'Category: ' + category;
        resultElement.innerHTML = resultMessage;
    }

});

// we can do by checking condition directly and then using document.getelementbyid('result').innerHtml = 'value of calculation';
// and set result category = normal, over, under, weight or obesity,