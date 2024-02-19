// input fields 
let billInput = document.querySelector('.bill-amount-input');
let amountOfPeapleInput = document.querySelector('.people-amount-input');

// tip and total values
let tipAmount = document.querySelector('.tip-amount');
let totalAmount = document.querySelector('.total-amount');

// percentage buttons
let tipValue = 0;
let percentageButtons = Array.from(document.querySelectorAll('.percentage-button'));
let customPercentageButton = document.querySelector('.custom-input');

// reset button
let resetButton = document.querySelector('.reset-button');

// input field values
let billValue;
let amountOfPeopleValue = 1;

// input field eventlisteners
billInput.addEventListener('input', () => {
    billValue = billInput.value;
    if (amountOfPeopleValue != 0) {
        updateTotal();
        updateTipAmount();
    }
});

amountOfPeapleInput.addEventListener('input', () => {
    amountOfPeopleValue = amountOfPeapleInput.value;
    if (amountOfPeopleValue != 0) {
        updateTotal();
        updateTipAmount();
    }

});

//percentage buttons eventlisteners
percentageButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (billValue != null && amountOfPeopleValue != null) {
            resetPercentageButtons();
            tipValue = button.innerHTML.replace('%', '');
            button.classList.add('percent-button-active');
            updateTipAmount();
        }
    });
});

// custom button eventlistener
// custom button eventlistener
customPercentageButton.addEventListener('input', () => {
    resetPercentageButtons();
    tipValue = customPercentageButton.value;
    customPercentageButton.classList.add('percent-button-active');
    updateTipAmount();
});

// reset button eventlistener
resetButton.addEventListener('click', () => {
    tipAmount.innerHTML = '$0.00';
    totalAmount.innerHTML = '$0.00';
    billInput.value = '';
    amountOfPeapleInput.value = '';
    billValue = null;
    amountOfPeopleValue = null;
    resetPercentageButtons();
})

function updateTotal() {
    tipAmount.innerHTML = '';
    totalAmount.innerHTML = `$${billValue / amountOfPeopleValue}`;
}

function updateTipAmount() {
    tipAmount.innerHTML = '';
    tipAmount.innerHTML = `$${(billValue / 100 * tipValue) / amountOfPeopleValue}`;
}

function resetPercentageButtons() {
    customPercentageButton.innerHTML = 'Custom';
    customPercentageButton.classList.remove('percent-button-active');
    percentageButtons.forEach(button => {
        button.classList.remove('percent-button-active');
    });
}