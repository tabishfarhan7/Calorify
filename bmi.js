const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultParagraph = document.getElementById('result');
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    if (weight && height) {
        const bmi = weight / (height ** 2);
        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } 
        else if (bmi < 25) {
            category = 'Normal weight';
        } 
        else if (bmi < 30) {
            category = 'Overweight';
        }
        else {
                category = 'Obese';
        }
        resultParagraph.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
        }
        else {
            resultParagraph.textContent = 'Please enter both weight and height';
        }
    });
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});