// Import and invoke the ticket booth component function
import { TicketBooth } from './TicketBooth.js';
import { TicketCount } from './ticketCount/TicketCount.js';
import { RideTicketHolders } from './rides/RideTicketHolders.js';
import { FoodTicketHolders } from './food/FoodTicketHolders.js';
import { GameTicketHolders } from './games/GameTicketHolders.js';
import { SideshowTicketHolders } from './sideshows/SideshowTicketHolders.js';

TicketBooth();
TicketCount();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders(); 
SideshowTicketHolders();