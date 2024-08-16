// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmi-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

        if (isNaN(weight) || isNaN(height) || height === 0) {
            resultDiv.textContent = 'Please enter valid weight and height.';
            return;
        }

        const bmi = weight / (height * height);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    });
});
