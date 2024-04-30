/*
Author: Hans Jaeger
Date: April 25, 2024
Description: This file contains the JavaScript code for the Orders page. 
             This file contains functions that calculate the total price of a product based on the quantity and price of the product. 
             It also contains functions that calculate the total cost of the order and display the shipping cost.
             The file also contains a function that copies the shipping address to the billing address. 
             The file also contains a function that displays the arrival dates based on the shipping cost.
*/


// Optimized JavaScript code for the Orders page

// Function to calculate the total price of a product
function calculateTotalLocal(quantity, price, tdId) {
    var total = quantity * price;
    var truncatedTotal = total.toFixed(2);
    var tdElement = document.getElementById(tdId);
    tdElement.textContent = "$" + truncatedTotal.replace(/\.00$/, '');
    calculateIdValue(); // Call this function only when necessary to reduce DOM manipulation
}

// Function to calculate the id's value and display it
// Function to calculate the id's value and display it to a specific id
function calculateIdValue() {
    var idValue1 = parseFloat($("#total_1").text().replace('$', '')) || 0;
    var idValue2 = parseFloat($("#total_2").text().replace('$', '')) || 0;
    var idValue3 = parseFloat($("#total_3").text().replace('$', '')) || 0;
    var idValue4 = parseFloat($("#total_4").text().replace('$', '')) || 0;
    // Add the values of the id's
    var totalIdValue = idValue1 + idValue2 + idValue3 + idValue4;

    $("#Total_Sum").text("$" + totalIdValue.toFixed(2));
}
// Function to display the shipping cost
function displayShippingCost(shipValue) {
    $("#shipping_cost").text(shipValue);
}

// Function to calculate the total cost of the order
function calcTotal() {
    if ($("#shipping_cost").text()!= '' && $("#Total_Sum").text()!= '') {
        removeAlert();
        var total_product_costs = parseFloat($("#Total_Sum").text().replace('$', '')) || 0;
        var shipping_Cost = parseFloat($("#shipping_cost").text().replace('$', '')) || 0;
        var totalCost = total_product_costs + shipping_Cost;
        $("#final_Cost").text("$" + totalCost.toFixed(2));
    }
    if ($("#hiddenAlert").children().length === 0) {
        showAlert("Please input/select at least one data for quantity and shipping method");
    }
}

// Function to display an alert message
function showAlert(message) {
    var alertElement = document.createElement("div");
    alertElement.className = "alert alert-danger";
    alertElement.role = "alert";
    alertElement.textContent = message;
    var hiddenAlert = document.getElementById("hiddenAlert");
    if (hiddenAlert) {
        hiddenAlert.appendChild(alertElement);
        hiddenAlert.style.display = "block";
    }
}

// Function to remove the alert message
function removeAlert() {
    var alertElement = document.getElementById("hiddenAlert");
    if (alertElement) {
        alertElement.parentNode.removeChild(alertElement);
    }
}

// Function to copy the shipping address to the billing address
function copyBillingAddress() {
    if ($("#sameCopy").is(":checked") && $("#sameCopy").val() === "yes") {
        $("#bill_name").val($("#name").val() || '');
        $("#bill_address_1").val($("#address_1").val() || '');
        $("#bill_address_2").val($("#address_2").val() || '');
        $("#bill_city").val($("#city").val() || '');
        $("#bill_state").val($("#state").val() || '');
        $("#bill_zip").val($("#zip").val() || '');
    } else {
        $("#bill_name").val('');
        $("#bill_address_1").val('');
        $("#bill_address_2").val('');
        $("#bill_city").val('');
        $("#bill_state").val('');
        $("#bill_zip").val('');
    }
}

// Function to display the arrival dates based on the shipping cost
function dateRange() {
    var today = new Date();
    var arrivalDate = $('#arrivalDate');
    var shippingCost = $("#shipping_cost").text();
    var shippingMethods = {
        '$15.95': { days: 1, label: 'Express Shipping' },
        '$10.95': { days: 2, label: '1 day Shipping' },
        '$7.95': { days: 5, label: 'Priority Shipping' },
        '$3.95': { days: 9, label: 'Economy Shipping' }
    };
    if (shippingMethods.hasOwnProperty(shippingCost)) {
        var method = shippingMethods[shippingCost];
        var incrementedDay_1 = new Date(today);
        incrementedDay_1.setDate(today.getDate() + method.days);
        var incrementedDay_2 = new Date(today);
        incrementedDay_2.setDate(today.getDate() + method.days + 1);
        arrivalDate.text('Arrival dates for ' + method.label + ': ' + incrementedDay_1.toLocaleDateString() + ' to ' + incrementedDay_2.toLocaleDateString());
    } else {
        arrivalDate.text('');
    }
    return arrivalDate;
}

// Function to show the date with the animation effect
function showDate(customId) {
    $("#" + customId).on("click", function(event) {
        dateRange();
        //Sweet little code snippet to scroll to the bottom of the page
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 1000);
    });
}

// Prevent form submission
function preventFormSubmission(id, flag) {
    $(id).on("click", function(event) {
        showDate(this.id);
        if (flag == true)
            event.preventDefault();
    });
}

// Initialize the form submission prevention
preventFormSubmission('#showDatesBtn', true);
preventFormSubmission('#submit');
