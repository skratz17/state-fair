const eventHub = document.querySelector('#state-fair');
const contentTarget = document.querySelector('.sideshow');

eventHub.addEventListener('sideshowTicketPurchased', () => {
  contentTarget.innerHTML += '<div class="person gawker"></div>';
});

export const SideshowTicketHolders = () => {};