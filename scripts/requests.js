import { getRequests, sendClowns } from "./dataAccess.js";
import { getClowns } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

export const Requests = () => {
    const clowns = getClowns()
    const requests = getRequests()
    const convertRequestToListElement = (request) => {
        return `<li>${request.nameOfChild}'s birthday scheduled for ${request.reservationDate}, Duration: ${request.resDuration} hours.
        <button class="request__delete"
                id="request--${request.id}">
            Deny
        </button>
        <select class="clowns" id="clowns">
                <option name="clowns" value="">Who completed this Reservation</option>
                ${clowns.map(
                        clown => {
                            return `<option id="chosenClown" value="${request.id}--${clown.id}">${clown.name}</option>`
                        }
                    ).join("")
                        }
            </select>
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


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === 'clowns') {
            const [requestId, clownId] = event.target.value.split("--")
            const dataToSendToAPI = {
                clownId: clownId,
                requestId: requestId
}
            sendClowns(dataToSendToAPI)
        }
    }
)
