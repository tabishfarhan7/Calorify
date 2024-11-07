const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const age = parseInt(document.querySelector('#age').value);
    const gender = document.querySelector('#gender').value;
    let bmr;
    if (gender === 'male') {
        bmr = 66 + (6.2 * weight) + (12.7 * height) - (6.8 * age);
    } else {
        bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
    const activityLevels = {
        1: 1.2,
        2: 1.375,
        3: 1.55,
        4: 1.725,
        5: 1.9
    };
    let activityLevel = prompt("Choose your activity level:\n1. Sedentary\n2. Lightly Active\n3. Moderately Active\n4. Very Active\n5. Extremely Active");
    activityLevel = activityLevels[activityLevel] || 1.2;
    const dailyCalories = bmr * activityLevel;
    resultDiv.innerHTML = `Your daily calorie needs are approximately ${Math.round(dailyCalories)} calories.`;
});