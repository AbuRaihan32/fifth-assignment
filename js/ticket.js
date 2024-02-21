
// get all seats
const seates = document.getElementsByClassName('forLoop');

for (seat of seates) {
    const seatsInnerText = seat.innerText;

    seat.addEventListener('click', function (event) {
        const currentSeat = getElementNumberValueById('current-seat');
        const selectedSeat = getElementNumberValueById('selectedSeat')


        if (currentSeat > 36) {
            event.target.style.backgroundColor = '#1DD100'
            const newSeat = currentSeat - 1;
            const currentSelectedSeat = selectedSeat + 1;
            setElementValueById('current-seat', newSeat)
            setElementValueById('selectedSeat', currentSelectedSeat)

            const selectedSeatName = event.target.innerText;

            // create Element and append
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.innerText = selectedSeatName;
            const td2 = document.createElement('td');
            td2.innerText = 'Economy'
            const td3 = document.createElement('td');
            td3.innerText = '550'

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            const tbody = document.getElementById('tbodyForAppend');
            tbody.appendChild(tr);

            const totalElement = document.getElementById('totalBDT');
            const totalNumber = getElementNumberValueById('totalBDT');
            const newTotal = totalNumber + 550;
            totalElement.innerText = newTotal;

            const GrandTotal = document.getElementById('GrandTotal');
            GrandTotal.innerText = newTotal;

            event.target.addEventListener('click', function (event) {

            })

        } else {
            popUp();
        }

    })
}
// start input apply button

const getInputField = document.getElementById('inputBox');
getInputField.addEventListener('keyup', function (event) {

    if ((event.target.value === "NEW15" || event.target.value === 'Couple 20')) {
        document.getElementById('applyButton').removeAttribute('disabled')
    } else {
        document.getElementById('applyButton').setAttribute('disabled', true)
    }
});




