const eventHub = document.querySelector('#state-fair');
const contentTarget = document.querySelector('.customers');

let ticketCount = 0;

const incrementAndRender = () => {
  ticketCount += 1;
  render(ticketCount);
};

eventHub.addEventListener('rideTicketPurchased', incrementAndRender);
eventHub.addEventListener('foodTicketPurchased', incrementAndRender);
eventHub.addEventListener('gameTicketPurchased', incrementAndRender);
eventHub.addEventListener('sideshowTicketPurchased', incrementAndRender);
eventHub.addEventListener('fullPackageTicketPurchased', incrementAndRender);

const render = ticketCount => {
  contentTarget.innerHTML = `<p>Total tickets purchased: ${ticketCount}</p>`
};

export const TicketCount = () => {
  render(ticketCount);
};