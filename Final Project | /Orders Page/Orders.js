
/*
Author: Hans Jaeger
Date: April 25, 2024
Description: This file contains the JavaScript code for the Orders page
*/

/*
 * Description: This function calculates the total price of a product based on the quantity and price of the product
 */
function calculateTotalLocal(quantity, price, tdId) {
    var total = quantity * price;
    var truncatedTotal = total.toFixed(2); // Round the total to 2 decimal places
    var tdElement = document.getElementById(tdId);
    tdElement.textContent = "$" + truncatedTotal.replace(/\.00$/, ''); // Add the dollar sign and remove the dot if the decimal is 0


    calculateIdValue(); 
}
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

// Description: This function calculates the total cost of the order
function calcTotal() {
    var total_product_costs = parseFloat($("#Total_Sum").text().replace('$', '')) || 0;
    var shipping_Cost = parseFloat($("#shipping_cost").text().replace('$', '')) || 0;
    var totalCost = total_product_costs + shipping_Cost;
    $("#final_Cost").text("$" + totalCost.toFixed(2));
}

// Description: This function copies the shipping address to the billing address
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
//This function will display the arrival dates based on the shipping cost
function dateRange() {
    var today = new Date();
    var arrivalDate = $('#arrivalDate');

    var shippingCost = $("#shipping_cost").text();

    if (shippingCost === '$15.95') { // Check shipping cost value
        var incrementedDay_1 = new Date(today);
        incrementedDay_1.setDate(today.getDate());

        var incrementedDay_2 = new Date(today);
        incrementedDay_2.setDate(today.getDate() + 1);

        arrivalDate.text('Arrival dates for Express Shipping: ' + incrementedDay_1.toLocaleDateString() + ' to ' + incrementedDay_2.toLocaleDateString());
    }
    else if (shippingCost === '$10.95') {
        var incrementedDay_1 = new Date(today);
        incrementedDay_1.setDate(today.getDate() + 1);

        var incrementedDay_2 = new Date(today);
        incrementedDay_2.setDate(today.getDate() + 2);

        arrivalDate.text('Arrival dates for 1 day Shipping: ' + incrementedDay_1.toLocaleDateString() + ' to ' + incrementedDay_2.toLocaleDateString());
    }
    else if (shippingCost === '$7.95') {
        var incrementedDay_1 = new Date(today);
        incrementedDay_1.setDate(today.getDate() + 2);

        var incrementedDay_2 = new Date(today);
        incrementedDay_2.setDate(today.getDate() + 5);

        arrivalDate.text('Arrival dates for Priority Shipping: ' + incrementedDay_1.toLocaleDateString() + ' to ' + incrementedDay_2.toLocaleDateString());
    }
    else if (shippingCost === '$3.95') {
        var incrementedDay_1 = new Date(today);
        incrementedDay_1.setDate(today.getDate() + 7);

        var incrementedDay_2 = new Date(today);
        incrementedDay_2.setDate(today.getDate() + 9);

        arrivalDate.text('Arrival dates for Economy Shipping: ' + incrementedDay_1.toLocaleDateString() + ' to ' + incrementedDay_2.toLocaleDateString());
    }
    
    
    else {
        arrivalDate.text('');
    }
    return arrivalDate;
}
// Add an event listener to the "Show Dates" button
document.getElementById('showDatesBtn').addEventListener('click', function(event) {
    // Prevent the default form submission
    event.preventDefault(); 
    dateRange();
       // A little code that helps the user scroll down smoothly. Thanks StackOverflow!
       $('html, body').animate({
        scrollTop: $(document).height() 
    }, 1000); 
});




