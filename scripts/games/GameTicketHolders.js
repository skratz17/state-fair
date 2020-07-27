const contentTarget = document.querySelector('.games');
const eventHub = document.querySelector('#state-fair');

eventHub.addEventListener('gameTicketPurchased', () => {
  contentTarget.innerHTML += '<div class="person player"></div>';
});

eventHub.addEventListener('fullPackageTicketPurchased', () => {
  contentTarget.innerHTML += '<div class="person bigSpender"></div>'
});

export const GameTicketHolders = () => {};