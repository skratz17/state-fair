const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener('click', event => {
    const type = event.target.id;

    let customEventType;
    const customEventBody = { detail: { type } };

    switch(type) {
        case 'rideTicket':
            customEventType = new CustomEvent('rideTicketPurchased', customEventBody);
            break;
        case 'foodTicket':
            customEventType = new CustomEvent('foodTicketPurchased', customEventBody);
            break;
    }

    eventHub.dispatchEvent(customEventType);
});

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
        </div>
    `
}

