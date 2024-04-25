
// Get the current date
var currentDate = new Date();

// Format the date as desired
var formattedDate = currentDate.toDateString();

// Set the formatted date as the content of the span element
$("#current-date").text(formattedDate);

// This section of code is for the activity select dropdown
function addActivity() {
    // Get the selected activity from the dropdown
    const selectedValue = $("#activity-select").val();

    // Create a checkbox element
    const checkbox = createCheckbox(selectedValue);

    // Create a label element for the checkbox
    const label = createLabel(selectedValue);

    // Create a div element to contain the checkbox and label
    const div = createDiv(checkbox, label);

    // Append the div to the activity checkboxes container
    $("#activity-checkboxes").append(div);

    // Add event listener to the checkbox
    checkbox.on("click", function() {
        moveCompletedActivity(checkbox, selectedValue);
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

// Function to create a div element
function createDiv(checkbox, label) {
    const div = $("<div>").append(checkbox, label);
    return div;
}

// Function to move completed activity
function moveCompletedActivity(checkbox, selectedValue) {
    if (checkbox.prop("checked")) {
        const completedActivity = $("<div>").text(selectedValue);
        $("#completed-activities").append(completedActivity);
    }
}
