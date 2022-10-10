// TODO Add import statements
import { fetchReservations } from "./dataAccess.js"
import { Buttons } from "./Buttons.js"
import { fetchClowns } from "./dataAccess.js"
import { fetchCompletions } from "./dataAccess.js"


// TODO Fetch reservations data
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = Buttons()
            })
        
    }

render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)