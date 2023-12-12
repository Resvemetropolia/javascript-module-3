<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Example</title>
</head>
<body>

<form id="myForm">
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" name="firstName" required>
    <br>
    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" required>
    <br>
    <button type="submit">Submit</button>
</form>

<p id="target"></p>

<script>
    // JavaScript code for reading form values and updating <p> element
    var formElement = document.getElementById("myForm");
    var targetElement = document.getElementById("target");

    formElement.addEventListener("submit", function(event) {
        event.preventDefault();
        var firstName = document.querySelector('[name="firstName"]').value;
        var lastName = document.querySelector('[name="lastName"]').value;
        targetElement.textContent = "Your name is " + firstName + " " + lastName;
    });
</script>

</body>
</html>
