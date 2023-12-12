<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Extended Calculator</title>
</head>
<body>

<input type="text" id="calculation" placeholder="Enter calculation expression">
<button onclick="calculate()">Calculate</button>
<p id="result"></p>

<script>
    // JavaScript code for the extended calculator
    function calculate() {
        var input = document.getElementById("calculation").value;
        var regex = /^(\d+)\s*([+\-*/])\s*(\d+)$/;

        if (regex.test(input)) {
            var match = input.match(regex);
            var num1 = parseInt(match[1]);
            var operator = match[2];
            var num2 = parseInt(match[3]);
            var result;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    // Check for division by zero
                    result = num2 !== 0 ? Math.floor(num1 / num2) : "Cannot divide by zero";
                    break;
                default:
                    result = "Invalid operator";
            }

            document.getElementById("result").textContent = "Result: " + result;
        } else {
            document.getElementById("result").textContent = "Invalid input. Please use the format: number operator number";
        }
    }
</script>

</body>
</html>
