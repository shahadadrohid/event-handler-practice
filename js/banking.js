// Get the input value using by function 
function getInputValue(inputid) {
    const newInputAmount = document.getElementById(inputid);
    const newInputText = newInputAmount.value;
    let newInputValue = parseFloat(newInputText);

    // Clear input box 
    newInputAmount.value = '';
    return newInputValue;
}
function getTotal(inputamount, currentAmount) {

    // Get the current deposit and withdraw amount 
    const getCurrentAmount = document.getElementById(currentAmount);
    const currentTotalText = getCurrentAmount.innerText;
    const currentTotalAmount = parseFloat(currentTotalText);

    // Adding current deposit/withdraw amount with newInputValue
    const currentTotal = currentTotalAmount + inputamount;
    getCurrentAmount.innerText = currentTotal;
}
// Get the deposit button 
document.getElementById('deposit-button').addEventListener('click', function () {
    const newInputValue = getInputValue('deposit-input')
    getTotal(newInputValue, 'deposit-total');
})