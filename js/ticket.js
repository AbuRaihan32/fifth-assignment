const seates = document.getElementsByClassName('forLoop');

for (seat of seates) {
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
            const tbodyForAppend = document.getElementById('tbodyForInput');

            tbodyForAppend.innerHTML`
                <tr>
                    <td id="tdForAppend"></td>
                    <td>Economy</td>
                    <td>550</td>
                </tr>
            `
            // const tdForAppend = document.getElementById('tdForAppend');
            // tdForAppend.innerText = selectedSeatName;
        } else {
            popUp();
        }
    })
}
