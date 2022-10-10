
const applicationState = {
    clowns: [],
    reservations: [],
    completions: []
    
}



// TODO Create function to post a party request to api to be saved in permanent storage

const API = "http://localhost:8088"


export const saveCompletion = (completedReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedReservation)

    }

    return fetch(`${API}/completions`, fetchOptions)
    .then(response => response.json())
    .then(
        (completed) => {
            
            applicationState.completions = completed
        }
    )
}


export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
    .then(response => response.json())
    .then(
        (completed) => {
            
            applicationState.completions = completed
        }
    )
    
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
                
            }
        )
}

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
    .then(response => response.json())
    .then(
        (reservationRequests) => {
            // Store the external state in application state
            applicationState.reservations = reservationRequests
        }
        )
    }

const mainContainer = document.querySelector("#container")

export const sendReservation = (userReservationRequests) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservationRequests)
    }


    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}



export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({ ...reservation }))
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown }))
}
