function calculateBMI() {
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('result');

  if (!name || isNaN(age) || isNaN(height) || isNaN(weight)) {
    result.innerText = 'Please fill in all fields with valid values.';
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmiRounded = bmi.toFixed(2);

  let category = '';
  let tip = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    tip = 'Consider a balanced diet rich in calories and consult a nutritionist.';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
    tip = 'Great job! Maintain your healthy lifestyle.';
  } else if (bmi < 29.9) {
    category = 'Overweight';
    tip = 'Incorporate regular exercise and reduce sugar/fat intake.';
  } else {
    category = 'Obesity';
    tip = 'Seek medical advice, start a workout routine, and improve your diet.';
  }

  result.innerHTML = `
    Hello <strong>${name}</strong> (Age ${age})!<br/>
    Your BMI is <strong>${bmiRounded}</strong> (${category}).<br/><br/>
    💡 <em>${tip}</em>
  `;
}
