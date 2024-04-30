/*
Author: Hans Jaeger
Date: April 25, 2024
Description: This file contains the addActivity, createcheckbox, createLabel, createDiv, moveCompletedActivity functions. 
*/
// Get the current date
var currentDate = new Date();

// Format the date as desired
var formattedDate = currentDate.toDateString();
$("#current-date").text(formattedDate);

// This function is called when the user clicks the "Add Activity" button
function addActivity() {
    // Get the selected activity from the dropdown
    const selectedValue = $("#activity-select").val();
    // Creation section for the labels and checkboxes which will be appended to the activity checkboxes container
    const checkbox = createCheckbox(selectedValue);
    const label = createLabel(selectedValue);
    const div = createDiv(checkbox, label);
  // Append the div to the activity checkboxes container
    $("#activity-checkboxes").append(div);

    // Add event listener to the checkbox
    checkbox.on("click", function() {
        moveCompletedActivity(checkbox, selectedValue);
        // Removes the checkbox from the activity checkboxes container
        checkbox.parent().remove();
    });
}

// Function to create a checkbox element
function createCheckbox(value) {
    const checkbox = $("<input>").attr({
        type: "checkbox",
        value: value,
        id: value
    });
    return checkbox;
}

// Function to create a label element
function createLabel(value) {
    const label = $("<label>").attr("for", value).text(value);
    return label;
}

// Function to create a div element with spacing between checkbox and label
function createDiv(checkbox, label) {
    const div = $("<div>").append(checkbox, label);
    // Added some margin since the checkboxes were too close to the labels
    checkbox.css("margin-right", "5px");
    return div;
}


// Function to move completed activity
function moveCompletedActivity(checkbox, selectedValue) {
    if (checkbox.prop("checked")) {
        const completedActivity = $("<div>").text(selectedValue);
        $("#completed-activities").append(completedActivity);
    }
}
