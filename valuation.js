// Get the form element
const form = document.getElementById("valuation-form-holder");

// Get the form inputs
const companyNameInput = document.getElementById("company-name");
const amountRaisedInput = document.getElementById("rs-amount");
const preMoneyValuationInput = document.getElementById("pre-amount");

// Get the result element
const resultElement = document.getElementById("result");

// Add submit event listener to the form
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form inputs
    const companyName = companyNameInput.value;
    const amountRaised = parseInt(amountRaisedInput.value.replace(/,/g, ''));
    const preMoneyValuation = parseInt(preMoneyValuationInput.value.replace(/,/g, ''));

    // Calculate the percentage of ownership the company will give up
    const ownershipPercentage = ((amountRaised * 100) / preMoneyValuation);

    // Format the result message
    const resultMessage = `Dear ${companyName}, you will be required to give away ${ownershipPercentage.toFixed(2)}% worth of equity for raising $${amountRaised.toLocaleString()} at a pre-money valuation of $${preMoneyValuation.toLocaleString()} at $${(amountRaised / ownershipPercentage).toLocaleString()} per share.`;

    // Set the result message in the result element
    resultElement.innerText = resultMessage;
});