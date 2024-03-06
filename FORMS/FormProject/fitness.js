/*
Author: Hans Jaeger
Date: March 5, 2024c
*/

//Global Variable Used for calcUsage() function and baseCalories()

var valueCalories =0 ;
var height;
var weight;
var heightValue;
var weightValue ;
var bmiFinal;
var balance;
var message;
//Function Message


function showMessage( ) {
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
     height = document.getElementById("userHeight").value;
     weight = document.getElementById("userWeight").value;
  
    // Store the values
   heightValue = parseInt(height);
   weightValue = parseInt(weight);
  
    var selectedOption = document.getElementById("activityList").value;

    if (selectedOption == "Sedentary") {
        valueCalories += 1.2 * (655 + (4.35 * weightValue) + (4.7 * heightValue) - (4.7 * age));
      } else if (selectedOption == "Active") {
        valueCalories += 1.55 * (655 + (4.35 * weightValue) + (4.7 * heightValue) - (4.7 * age));
      } else if (selectedOption == "Athlete") {
        valueCalories += 1.9 * (655 + (4.35 * weightValue) + (4.7 * heightValue) - (4.7 * age));
      }
    if (valueCalories > 0){

    
    alert("Your Base Calories: " + valueCalories);
    }
    else{
        console.log(valueCalories)
        alert("Please Input Values")
    }
  
  }
  

function bmiCalc(){
    //Declaring variables and storing them into variables
    height = document.getElementById("userHeight").value;
    weight = document.getElementById("userWeight").value;
    // Store the values 
    heightValue = parseInt(height);
    weightValue = parseInt(weight);

    bmiFinal = ((weightValue) / (heightValue * heightValue)) * 703;
    if(bmiFinal){
        alert("Your BMI is: "+bmiFinal)
    }
    else{
        alert("Please Input Values")
    }
    
    console.log(bmiFinal)
 }
 function calcUsage() {
    // Declare Variables:
    var activities = 0;
    var consumed = 0;
  
    // Iterate through the values of the food categories
    var selectedOptions = document.querySelectorAll('#foodCategories option:checked');
    selectedOptions.forEach(function(option) {
      var selectedOption = parseInt(option.value);
      consumed += selectedOption;
    });
  
    // Iterate through the values of the activity categories
    selectedOptions = document.querySelectorAll('#activityCategories option:checked');
    selectedOptions.forEach(function(option) {
      var selectedOption = parseInt(option.value);
      activities += selectedOption;
    });
  
    // Calculation
    var baseCalories = valueCalories; // Use the global variable valueCalories
    var balance = consumed - baseCalories - activities;
    var message;
  
    if (balance > 0) {
      message = "You have consumed more calories!";
    } else if (balance < 0) {
      message = "You have burned more calories!";
    } else {
      message = "ERROR";
    }
  
    document.getElementById("Results").value = message;
    console.log(message + " "+ balance)
  }
  
  