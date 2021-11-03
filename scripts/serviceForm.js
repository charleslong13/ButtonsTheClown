import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberOfChildren">Number of Guests</label>
            <input type="number" name="numberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Date of Reservation</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="duration">Duration of Party</label>
            <input type="number" name="duration" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Reservation Details</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const numberOfChildren = document.querySelector("input[name='numberOfChildren']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='reservationDate']").value
        const reservationDuration = document.querySelector("input[name='duration']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            nameOfParent: parentName,
            nameOfChild: childName,
            numberOfChildren: numberOfChildren,
            address: userAddress,
            reservationDate: userDate,
            resDuration: reservationDuration
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

