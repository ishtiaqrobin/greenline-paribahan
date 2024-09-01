
// const buttons = document.querySelectorAll("button");

const buttonContainer1 = document.getElementById('button-container1');
const buttonContainer2 = document.getElementById('button-container2');

const seatContainer1 = buttonContainer1.querySelectorAll('button');
const seatContainer2 = buttonContainer2.querySelectorAll('button');

const buttons = [...seatContainer1, ...seatContainer2];

const buttonClicked = {};

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const clickedButtonsCount = Object.keys(buttonClicked).length;

        if (clickedButtonsCount >= 4) {
            alert('You can select maximum 4 seats at a time.')
            return;
        }

        const elementId = button.id;

        if (!buttonClicked[elementId]) {
            buttonClicked[elementId] = true;

            addBackgroundColorById(elementId)

            const totalSeats = getElementValueById('available-seat')
            const currentSeats = totalSeats - 1

            setElementValueById('available-seat', currentSeats)
            // console.log(`Button ${elementId} clicked`);

            // Get the length of the buttonClicked object
            const clickedButtonsCount = Object.keys(buttonClicked).length;

            if (clickedButtonsCount <= 4) {
                removeClasslistById('selected-seat')

                setElementValueById('selected-seat', clickedButtonsCount)

                const showSeatDiv = document.getElementById('selected-seat-count')
                const newChild = document.createElement('div')
                newChild.classList.add('flex', 'justify-between', 'py-2')

                newChild.innerHTML = `
                    <div class='flex justify-between w-full'>
                    <p>${elementId}</p>
                    <p>Economy</p>
                    <p>550</p>
                    </div>
                            `
                showSeatDiv.appendChild(newChild);
            }

            const totalPrice = clickedButtonsCount * 550

            setElementValueById('total-price', totalPrice)

            if (clickedButtonsCount >= 4) {
                const element = document.getElementById('apply-button')
                element.removeAttribute('disabled')
            }

            document.getElementById('apply-button').addEventListener('click', function () {
                const inputValue = getTextValueElementById('coupon-field')

                if (inputValue == 'Couple20' || inputValue == 'New15') {
                    let discount;
                    if (inputValue == 'Couple20') {
                        discount = 0.20;
                    } else if (inputValue == 'New15') {
                        discount = 0.15;
                    }

                    const discountedPrice = totalPrice * (1 - discount);
                    const showDiscountPrice = totalPrice - discountedPrice;

                    removeClasslistById('discount-field')

                    setElementValueById('discount-price', showDiscountPrice)

                    setElementValueById('grand-total', discountedPrice)

                    // Hide the invalid coupon message
                    addClasslistById('invalid-coupon')

                } else {
                    removeClasslistById('invalid-coupon')
                }

            });

            document.getElementById('phone-number').addEventListener('input', function () {
                const inputField = this.value;
                // const inputFieldValue = parseInt(inputField).toString()
                const inputFieldValue = inputField.replace()

                if (clickedButtonsCount >= 1 && inputFieldValue.length >= 11) {
                    const element = document.getElementById('next-button')
                    element.removeAttribute('disabled')
                }
                else {
                    const element = document.getElementById('next-button')
                    element.setAttribute('disabled', true)
                }
            });
        }
    });
});


function Continue() {
    addClasslistById('success-modal');

    setTimeout(() => {
        location.reload();
    }, 50);
}
