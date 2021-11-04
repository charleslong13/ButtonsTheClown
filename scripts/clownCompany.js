import { Requests } from "./requests.js"
import { ServiceForm } from "./serviceForm.js"


export const clownCompany = () => {
    return `
        <h1>Rent A Clown</h1>
        <section class="serviceForm">
        ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Reservation Requests</h2>
            ${Requests()}
        </section>
        `
}