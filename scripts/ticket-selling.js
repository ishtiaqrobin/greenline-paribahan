
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

            const element = document.getElementById(elementId)
            element.classList.add("bg-[#1DD100]", "text-white")

            const totalSeats = getElementValueById('available-seat')
            const currentSeats = totalSeats - 1

            setElementValueById('available-seat', currentSeats)

            // Get the length of the buttonClicked object
            const clickedButtonsCount = Object.keys(buttonClicked).length;
            const totalPrice = clickedButtonsCount * 550

            setElementValueById('total-price', totalPrice)

            if (clickedButtonsCount >= 4) {
                const element = document.getElementById('apply-button')
                element.removeAttribute('disabled')
            }

            document.getElementById('apply-button').addEventListener('click', function () {
                const inputField = document.getElementById('coupon-field');
                const inputValue = inputField.value;

                if (inputValue == 'Couple20' || inputValue == 'New15') {
                    let discount;
                    if (inputValue == 'Couple20') {
                        discount = 0.20;
                    } else if (inputValue == 'New15') {
                        discount = 0.15;
                    }

                    const discountedPrice = totalPrice * (1 - discount);
                    const showDiscountPrice = totalPrice - discountedPrice;

                    const element = document.getElementById('discount-field');
                    element.classList.remove('hidden');

                    setElementValueById('discount-price', showDiscountPrice)

                    setElementValueById('grand-total', discountedPrice)

                    // Hide the invalid coupon message
                    const invalidCouponElement = document.getElementById('invalid-coupon');
                    invalidCouponElement.classList.add('hidden');

                } else {
                    const element = document.getElementById('invalid-coupon');
                    element.classList.remove('hidden');
                }

            });

            // console.log(`Total buttons clicked: ${clickedButtonsCount}`);
        }


    });
});
