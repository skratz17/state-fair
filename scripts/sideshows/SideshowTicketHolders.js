const eventHub = document.querySelector('#state-fair');
const contentTarget = document.querySelector('.sideshow');

export const SideshowTicketHolders = () => {
  eventHub.addEventListener('sideshowTicketPurchased', () => {
    contentTarget.innerHTML += '<div class="person gawker"></div>';
  });

  eventHub.addEventListener('fullPackageTicketPurchased', () => {
    contentTarget.innerHTML += '<div class="person bigSpender"></div>'
  });
};