/*
Author: Hans Jaeger
Date: March 5, 2024c
*/



//Function Message


function showMessage() {
   var selectedOption = document.getElementById("activityList").value;
   if (selectedOption == "Sedentary"){
    alert(  "Little physical activity. Spends most of the day sitting, reading, socializing, watching television, playing video games, and using the computer.")

}
if (selectedOption == "Active"){
    alert(  "Has a daily exercise routine, such as working out at a gym, going for a walk or jog, or doing some regular weightlifting")

}
if(selectedOption == "Athlete"){
    alert("Engages in vigorous sporting activities or training 3 – 4 hours a day 6 days a week.")
}
  }


 
  function baseCalories() {
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
  
    // Store the final value
    var valueCalories = 0;

    /* FOR MULTIPLE TAG SELECT

    // Requires to store it into an array as we are accessing the multiple attribute tag

    //We then iterate through the options by using .forEach(function(option))
    // Then we create a function 
    Array.from(selectedOptions).forEach(function(option) {
    
        //Store the array values into selectedOption
      var selectedOption = option.value;
  
      if (selectedOption == "Sedentary") {
        valueCalories += 1.2 * (655 + (4.35 * weightValue) + (4.7 * heightValue) - (4.7 * age));
      } else if (selectedOption == "Active") {
        valueCalories += 1.55 * (655 + (4.35 * weightValue) + (4.7 * heightValue) - (4.7 * age));
      } else if (selectedOption == "Athlete") {
        valueCalories += 1.9 * (655 + (4.35 * weightValue) + (4.7 * heightValue) - (4.7 * age));
      }
    });
    */
    if (selectedOption == "Sedentary") {
        valueCalories += 1.2 * (655 + (4.35 * weightValue) + (4.7 * heightValue) - (4.7 * age));
      } else if (selectedOption == "Active") {
        valueCalories += 1.55 * (655 + (4.35 * weightValue) + (4.7 * heightValue) - (4.7 * age));
      } else if (selectedOption == "Athlete") {
        valueCalories += 1.9 * (655 + (4.35 * weightValue) + (4.7 * heightValue) - (4.7 * age));
      }
    if (valueCalories){

    
    alert("Your Base Calories: " + valueCalories);
    }
    else{
        alert("Please Input Values")
    }
  }
  

function bmiCalc(){
    //Declaring variables and storing them into variables
    var height = document.getElementById("userHeight").value;
    var weight = document.getElementById("userWeight").value;
    // Store the values 
    var heightValue = parseInt(height);
    var weightValue = parseInt(weight);

    var bmiFinal = ((weightValue) / (heightValue * heightValue)) * 703;
    if(bmiFinal){
        alert("Your BMI is: "+bmiFinal)
    }
    else{
        alert("Please Input Values")
    }
    
    console.log(bmiFinal)
 }