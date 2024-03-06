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
 
  function baseCalories(){
    // Get the birth date from the input
    const birthDateInput = document.getElementById('userBirthDate');
        const birthDate = new Date(birthDateInput.value);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    // Get the height and weight input elements
    var height = document.getElementById("userHeight").value;
    var weight = document.getElementById("userWeight").value;
    // Store the values 
    var heightValue = parseInt(height);
    var weightValue = parseInt(weight);

    var selectedOption = document.getElementById("activityList").value;

    //Store the final value
    var valueCalories;
//Checking inputs values from the activityList    
if(selectedOption == "Sedentary"){
        valueCalories = 1.2 *  ( 655 + (4.35 * weightValue ) + (4.7 * heightValue ) - (4.7 * age ));
        alert(valueCalories)
  }
  if(selectedOption == "Active"){
    valueCalories = 1.55 *  ( 655 + (4.35 * weightValue ) + (4.7 * heightValue ) - (4.7 * age ));
    alert(valueCalories)
}
if(selectedOption == "Athlete"){
    valueCalories = 1.9 *  ( 655 + (4.35 * weightValue ) + (4.7 * heightValue ) - (4.7 * age ));
    alert("Your BMI is: ",valueCalories
    )
}
}

function bmiCalc(){
    //Declaring variables and storing them into variables
    var height = document.getElementById("userHeight").value;
    var weight = document.getElementById("userWeight").value;
    // Store the values 
    var heightValue = parseInt(height);
    var weightValue = parseInt(weight);

    var bmiFinal = ((weight) / (height * height)) * 703
    alert("Your BMI is: ", bmiFinal)
 }