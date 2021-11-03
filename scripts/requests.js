import { getRequests } from "./dataAccess.js";


export const Requests = () => {
    const requests = getRequests()
    const convertRequestToListElement = (request) => {
        return `<li>${request.nameOfChild}'s birthday scheduled for ${request.reservationDate}, Duration: ${request.resDuration} hours.
        <button class="request__delete"
                id="request--${request.id}">
            Deny
        </button>
    </li>`
    }

    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")
        }
        </ul>
    `

    return html
}
