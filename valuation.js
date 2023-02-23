// Get the form element
const form = document.getElementById("valuation-form-holder");

// Get the form inputs
const companyNameInput = document.getElementById("company-name");
const amountRaisedInput = document.getElementById("rs-amount");
const preMoneyValuationInput = document.getElementById("pre-amount");

// Get the result element
const resultElement = document.getElementById("result");

// Get the clear input button
const clearInputButton = document.getElementById("clear-input");

// Add submit event listener to the form
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form inputs
    const companyName = companyNameInput.value;
    const amountRaised = parseInt(amountRaisedInput.value.replace(/,/g, ''));
    const preMoneyValuation = parseInt(preMoneyValuationInput.value.replace(/,/g, ''));

    // Calculate the percentage of ownership the company will give up
    const ownershipPercentage = ((amountRaised * 100) / preMoneyValuation);
    // Calculate the share unit the amount invested is worth
    const perShareUnit = (amountRaised / (ownershipPercentage));

    // Format the result message
    const resultMessage = `Dear ${companyName}, you will be required to give away ${ownershipPercentage.toFixed(2)}% worth of equity for raising £${amountRaised.toLocaleString()} at a pre-money valuation of £${preMoneyValuation.toLocaleString()}.`;

    // Set the result message in the result element
    resultElement.innerText = resultMessage;

    // Check if all input fields are empty, and disable the clear input button if they are
    if (companyName === "" && amountRaised === "" && preMoneyValuation === "") {
        clearInputButton.disabled = true;
    } else {
        clearInputButton.disabled = false;
    }

    // Add click event listener to the clear input button
    clearInputButton.addEventListener("click", function() {
        companyNameInput.value = "";
        amountRaisedInput.value = "";
        preMoneyValuationInput.value = "";
        clearInputButton.disabled = true; // Disable the button after clearing the input fields
    });

});