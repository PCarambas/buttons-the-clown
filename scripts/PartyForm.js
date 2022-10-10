import { sendReservation } from "./dataAccess.js"


/* TODO Create event listener that collects user input, constructs a state object
for the reservation then pass it to function.*/ 

const mainContainer = document.querySelector("#container")


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // User input
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const childrenAttending = document.querySelector("input[name='childrenAttending']").value
        const partyAddress = document.querySelector("input[name='partyAddress']").value
        const dateOfReservation = document.querySelector("input[name='dateOfReservation']").value
        const lengthInHours = document.querySelector("input[name='lengthInHours']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            attending: childrenAttending,
            address: partyAddress,
            date: dateOfReservation,
            length: lengthInHours
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})






// TODO Create form for party request. Make sure each input field is present
// Parent Name, Child name, num of children attending, address, date, length in hours

export const PartyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>

        <div class="field">
        <label class="label" for="childName">Child Name</label>
        <input type="text" name="childName" class="input" />
        </div>

        <div class="field">
        <label class="label" for="childrenAttending">Number of Children Attending</label>
        <input type="number" name="childrenAttending" class="input" />
        </div>

        <div class="field">
            <label class="label" for="partyAddress">Party Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>

        <div class="field">
            <label class="label" for="dateOfReservation">Party Date</label>
            <input type="date" name="dateOfReservation" class="input" />
        </div>

        <div class="field">
            <label class="label" for="lengthInHours">Hours Needed</label>
            <input type="number" name="lengthInHours" class="input" />
        </div>

        <button class="button" id="submitReservation">Party Time</button>
    `

    return html
}