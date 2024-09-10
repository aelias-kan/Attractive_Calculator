const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "+", "-", "="];
let output = "";

// Function to perform the calculation
const Calculate = (btnValue) => {
    display.focus();
    if (btnValue === '=' && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

// Adding event listeners to calculator buttons
buttons.forEach(button => {
    const value = button.dataset.value;
    const mode = button.getAttribute("data-mode");

    // Check if the button is for mode switching
    if (mode) {
        button.addEventListener("click", () => {
            if (mode === "light") {
                document.body.classList.remove("dark-mode");
            } else if (mode === "dark") {
                document.body.classList.add("dark-mode");
            }
        });
    } else if (value) {
        button.addEventListener("click", () => Calculate(value));
    }
});
