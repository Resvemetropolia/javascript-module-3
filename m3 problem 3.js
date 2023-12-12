<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>

<div id="target"></div>

<script>
    var targetElement = document.getElementById("target");
    var names = ['John', 'Paul', 'Jones'];
    var ulElement = document.createElement("ul");

    for (var i = 0; i < names.length; i++) {
        var liElement = document.createElement("li");
        liElement.textContent = names[i];
        ulElement.appendChild(liElement);
    }

    targetElement.innerHTML = "";
    targetElement.appendChild(ulElement);
</script>

</body>
</html>
