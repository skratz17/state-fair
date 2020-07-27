const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector('#state-fair');

eventHub.addEventListener('foodTicketPurchased', () => {
  contentTarget.innerHTML += `<div class="person eater"></div>`;
});

eventHub.addEventListener('fullPackageTicketPurchased', () => {
  contentTarget.innerHTML += '<div class="person bigSpender"></div>'
});

export const FoodTicketHolders = () => {};