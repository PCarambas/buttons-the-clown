// TODO Import statements
import { getReservations, getClowns } from "./dataAccess.js"
import { deleteReservation } from "./dataAccess.js"
import { saveCompletion } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [, reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")

            const completion = {
                reservationId: `${reservationId}`,
                clownId: `${clownId}`,
                timestamp: Date.now()
            }

            saveCompletion(completion)
        }

    }
)




export const Reservations = () => {
    const reservations = getReservations()
    const clowns = getClowns()

    let html = `<ul>`
    const listItems = reservations.map(reservation => {

        return `<li id="${reservation.id}">
        ${reservation.childName}
                <button class="reservation__delete" id="reservation--${reservation.id}">
                    Deny
                </button>

                <select class="clowns" id="clowns">
                <option value="">Choose</option>
                    ${clowns.map(clown => {
                return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
    }
                </select>

                </li>`
    })

                html += listItems.join("")

                html += `</ul>`
                return html
            
}
