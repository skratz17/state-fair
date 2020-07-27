const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener('click', event => {
    let customEvent;

    switch(event.target.id) {
        case 'rideTicket':
            customEvent = new CustomEvent('rideTicketPurchased');
            break;
        case 'foodTicket':
            customEvent = new CustomEvent('foodTicketPurchased');
            break;
        case 'gameTicket':
            customEvent = new CustomEvent('gameTicketPurchased');
            break;
        case 'sideshowTicket':
            customEvent = new CustomEvent('sideshowTicketPurchased');
            break;
        case 'fullPackageTicket':
            customEvent = new CustomEvent('fullPackageTicketPurchased');
            break;
    }

    eventHub.dispatchEvent(customEvent);
});

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

