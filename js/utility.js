// get Element Value
function getElementNumberValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

// set Element Value
function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value;
}

// popUp
function popUp(){
    alert('You cannot select more than four seats.')
}

function applying() {
    const getInputField = document.getElementById('inputBox');
    const value = getInputField.value;

    let GrandTotal = getElementNumberValueById('GrandTotal');

    if (value === "NEW15"){
        GrandTotal = GrandTotal - GrandTotal*15/100;
        document.getElementById('tdTotal').innerText= 'Payable Total:'
        document.getElementById('GrandTotal').innerText = GrandTotal;
        document.getElementById('inputBox').classList.add('hidden');
        document.getElementById('applyButton').classList.add('hidden')
    }else if (value === "Couple 20"){
        GrandTotal = GrandTotal - GrandTotal*20/100;
        document.getElementById('tdTotal').innerText= 'Payable Total:'
        document.getElementById('GrandTotal').innerText = GrandTotal;
        document.getElementById('inputBox').classList.add('hidden');
        document.getElementById('applyButton').classList.add('hidden')
    }

}
