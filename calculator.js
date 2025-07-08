function performOperation(operation) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var convNumberone = Number(num1);
    var convNumbertwo = Number(num2);
    var resultElement = document.getElementById("result_statement");

    switch (operation) {
        case 'addition':
            var add = convNumberone + convNumbertwo;
            resultElement.innerHTML = "Addition of " + convNumberone + " and " + convNumbertwo + " is " + add;
            break;
        case 'subtraction':
            var sub = convNumberone - convNumbertwo;
            resultElement.innerHTML = "Subtraction of " + convNumberone + " and " + convNumbertwo + " is " + sub;
            break;
        case 'multiplication':
            var mul = convNumberone * convNumbertwo;
            resultElement.innerHTML = "Multiplication of " + convNumberone + " and " + convNumbertwo + " is " + mul;
            break;
        case 'division':
            if (convNumbertwo !== 0) {
                var div = convNumberone / convNumbertwo;
                resultElement.innerHTML = "Division of " + convNumberone + " and " + convNumbertwo + " is " + div;
            } else {
                resultElement.innerHTML = "Cannot divide by zero.";
            }
            break;
        default:
            resultElement.innerHTML = "Invalid operation selected.";
    }
}

function resetCalculator() {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("result_statement").innerHTML = '';
}
