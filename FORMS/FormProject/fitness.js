/*
Author: Hans Jaeger
Date: March 5, 2024c
*/


/*
//Function Message


function showMessage() {
   var selectedOption = document.getElementById("activityList").value;
   if (selectedOption == "Sedentary"){
    alert(  "Little physical activity. Spends most of the day sitting, reading, socializing, watching television, playing video games, and using the computer.")

}
if (selectedOption == "Active"){
    alert(  "Has a daily exercise routine, such as working out at a gym, going for a walk or jog, or doing some regular weightlifting")

}
  }

  */

  function bmiCalc(){
    // Get the birth date from the input
    const birthDateInput = document.getElementById('userBirthDate');
        const birthDate = new Date(birthDateInput.value);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    // Get the height and weight input elements
    var heightInput = document.getElementById("userHeight");
    var weightInput = document.getElementById("userWeight");

    // Get the values from the input elements
    var height = heightInput.value;
    var weight = weightInput.value;

    // Store the values 
    var heightValue = parseInt(height);
    var weightValue = parseInt(weight);

    var selectedOption = document.getElementById("activityList").value;

    //Store the final value
    var valueBMI;
//Checking inputs values from the activityList    
if(selectedOption == "Sedentary"){
        valueBMI = 1.2 *  ( 655 + (4.35 * weightValue ) + (4.7 * heightValue ) - (4.7 * age ));
        alert(valueBMI)
  }
  if(selectedOption == "Active"){
    valueBMI = 1.55 *  ( 655 + (4.35 * weightValue ) + (4.7 * heightValue ) - (4.7 * age ));
    alert(valueBMI)
}
if(selectedOption == "Athlete"){
    valueBMI = 1.9 *  ( 655 + (4.35 * weightValue ) + (4.7 * heightValue ) - (4.7 * age ));
    alert("Your BMI is: ",valueBMI)
}
}