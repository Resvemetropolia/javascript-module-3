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

    var ulElement = document.createElement("ul");

    var li1 = document.createElement("li");
    li1.textContent = "First item";
    ulElement.appendChild(li1);

    var li2 = document.createElement("li");
    li2.textContent = "Second item";
    li2.classList.add("my-item");
    ulElement.appendChild(li2);

    var li3 = document.createElement("li");
    li3.textContent = "Third item";
    ulElement.appendChild(li3);
    targetElement.appendChild(ulElement);
</script>

</body>
</html>
