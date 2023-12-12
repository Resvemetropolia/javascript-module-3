<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>

<select id="target"></select>

<script>
    var targetElement = document.getElementById("target");
    var students = [
        { value: "2345768", name: "John" },
        { value: "2134657", name: "Paul" },
        { value: "5423679", name: "Jones" }
    ];

    var selectElement = document.createElement("select");
    for (var i = 0; i < students.length; i++) {
        var optionElement = document.createElement("option");
        optionElement.value = students[i].value;
        optionElement.textContent = students[i].name;
        selectElement.appendChild(optionElement);
    }

    targetElement.appendChild(selectElement);
</script>

</body>
</html>
