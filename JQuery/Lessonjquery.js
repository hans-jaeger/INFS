/*
Author: Hans Jaeger
Date: March 25, 2024
Lesson: Introduction to jQuery and its functionalities. Includes examples of usage.
*/

//There are two ways to include jQuery: downloading the library or referencing it from an online source.

//Link: https://jquery.com/download/

//Download: Compressed vs uncompressed versions

//For production, use the compressed version. For development, use the uncompressed version.
<script src="jquery-3.7.1.js"></script>
/*The CDN Version (linking online) has the disadvantage of being updated to a new version, which may affect your existing code.*/
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

//Syntax: 
$() //Calls the jQuery object. 

$standsForjQuery
$("#button").click(function(){}) //Defining a function to be executed when the button is clicked.

//The $() syntax calls the jQuery function. 
//The ('') specifies the id (indicated by the #) and the .click() method attaches the function to the selected element.

$(document).ready(function(){})
/*The dot notation is used to chain operations and events together on a single object. 
Example: selector.operation.property(value) or selector.property.operation(argument)*/

//Note: It is important to ensure that the page has finished loading before calling jQuery functions.

$(document).ready(function(){

    $("#button").click(function(){}) //Once the document is ready, then execute the following code. 
})
/* The code above is used when the script tag is placed in the head section, ensuring that the entire body is loaded before executing the code. 
The ready() function specifies that the following function should be executed once the document is ready or has been updated (could be from input forms). */

