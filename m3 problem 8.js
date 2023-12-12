<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
</head>
<body>

<input type="number" id="num1" placeholder="Enter first number">
<select id="operation">
    <option value="add">Addition (+)</option>
    <option value="subtract">Subtraction (-)</option>
    <option value="multiply">Multiplication (*)</option>
    <option value="divide">Division (/)</option>
</select>
<input type="number" id="num2" placeholder="Enter second number">
<button onclick="calculate()">Calculate</button>
<p id="result"></p>

<script>
    // JavaScript code for the simple calculator
    function calculate() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var operation = document.getElementById("operation").value;
        var result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operation";
        }

        document.getElementById("result").textContent = "Result: " + result;
    }
</script>

</body>
</html>
