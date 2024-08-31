
const buttonClicked = {};

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const clickedButtonsCount = Object.keys(buttonClicked).length;

        // Check if 4 buttons have already been clicked
        if (clickedButtonsCount >= 4) {
            console.log("Maximum of 4 buttons clicked. No more clicks will be counted.");
            return; // Exit the function if 4 buttons have been clicked
        }

        const elementId = button.id;

        if (!buttonClicked[elementId]) {
            buttonClicked[elementId] = true;

            const element = document.getElementById(elementId)
            element.classList.add("bg-[#1DD100]", "text-white")

            const totalSeats = getElementValueById('available-seat')
            const currentSeats = totalSeats - 1

            setElementValueById('available-seat', currentSeats)

            console.log(`Button ${elementId} clicked`);

            // Get the length of the buttonClicked object
            const clickedButtonsCount = Object.keys(buttonClicked).length;

            // Optional: log the count of clicked buttons
            console.log(`Total buttons clicked: ${clickedButtonsCount}`);
        }
    });
});

