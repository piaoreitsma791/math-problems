
<script>
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
let answer = "";
switch (operator) {
    case "+":
        answer = num1 + num2;
        break;
    case "-":
        answer = num1 - num2;
        break;
    case "*":
        answer = num1 * num2;
        break;
    case "/":
        if (num2 != 0) {
            answer = num1 / num2;
        } else {
            operator = ["+", "-", "*"][Math.floor(Math.random() * 3)];
            answer = "";
        }
        break;
}
document.getElementById("math-problem").innerText = `${num1} ${operator} ${num2} =`;
document.getElementById("answer-input").value = "";
</script>