import { PartyForm } from "./PartyForm.js"
import { Reservations } from "./Reservations.js"

export const Buttons = () => {
    return `
        <h1>Button's and Lollipop's Big Adventure</h1>
        <section class="PartyForm">
            ${PartyForm()}
        </section>

        <section class="partyRequests">
            <h2>Party Requests</h2>
            ${Reservations()}
        </section>
    `
}