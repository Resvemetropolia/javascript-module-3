<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>

<button id="myButton">Click me</button>

<script>
    var buttonElement = document.getElementById("myButton");

    buttonElement.addEventListener("click", function() {
        alert("Button Clicked");
    });
</script>

</body>
</html>
