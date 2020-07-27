const eventHub = document.querySelector('#state-fair');
const contentTarget = document.querySelector('.customers');

let ticketCount = 0;

const incrementAndRender = amount => {
  return () => {
    ticketCount += amount;
    render(ticketCount);
  }
};

eventHub.addEventListener('rideTicketPurchased', incrementAndRender(1));
eventHub.addEventListener('foodTicketPurchased', incrementAndRender(1));
eventHub.addEventListener('gameTicketPurchased', incrementAndRender(1));
eventHub.addEventListener('sideshowTicketPurchased', incrementAndRender(1));
eventHub.addEventListener('fullPackageTicketPurchased', incrementAndRender(4));

const render = ticketCount => {
  contentTarget.innerHTML = `<p>Total tickets purchased: ${ticketCount}</p>`
};

export const TicketCount = () => {
  render(ticketCount);
};