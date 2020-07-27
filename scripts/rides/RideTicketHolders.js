const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener('rideTicketPurchased', event => {
    const className = event.detail.type === 'rideTicket' ? 'rider' : '';
    contentTarget.innerHTML += `<div class="person ${className}"></div>`;
});

export const RideTicketHolders = () => {
};