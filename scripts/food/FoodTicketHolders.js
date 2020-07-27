const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector('#state-fair');

eventHub.addEventListener('foodTicketPurchased', () => {
  const className = event.detail.type === 'foodTicket' ? 'eater' : '';
  contentTarget.innerHTML += `<div class="person ${className}"></div>`;
});

export const FoodTicketHolders = () => {};