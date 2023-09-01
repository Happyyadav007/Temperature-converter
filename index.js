// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to handle the conversion when the button is clicked
function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const resultSpan = document.getElementById("result");

    const celsiusValue = parseFloat(celsiusInput.value);

    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
        resultSpan.textContent = fahrenheitValue.toFixed(2);
    } else {
        resultSpan.textContent = "Invalid Input";
    }
}

// Add event listener to the Convert button
const convertButton = document.getElementById("convertBtn");
convertButton.addEventListener("click", convertTemperature);
