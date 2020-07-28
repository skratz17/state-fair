const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener('rideTicketPurchased', () => {
        contentTarget.innerHTML += `<div class="person rider"></div>`;
    });

    eventHub.addEventListener('fullPackageTicketPurchased', () => {
        contentTarget.innerHTML += '<div class="person bigSpender"></div>'
    });
};