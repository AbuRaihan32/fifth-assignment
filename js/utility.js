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
    const newSeat = element.innerText = value;
}

// popUp
function popUp(){
    alert('You cannot select more than four seats.')
}