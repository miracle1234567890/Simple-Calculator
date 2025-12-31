const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value === "clear") {
            currentInput = "";
            display.value = "";
            return;
        }

        if (value === "delete") {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
            return;
        }

        if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
            return;
        }

        currentInput += value;
        display.value = currentInput;
    });
});
