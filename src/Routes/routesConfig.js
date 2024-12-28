import dashboardIcon from '../assets/DashboardIcon.png';
import MyTicektsIcon from '../assets/MyTicketsIcon.png';
import NewTicketsIcon from '../assets/NewTicketIcon.png';

const routes = [
   { path: "/Dashboard", name: "Dashboard", component: "Dashboard", icon: dashboardIcon },
   { path: "/New-ticket", name: "New Ticket", component: "NewTickets", icon: NewTicketsIcon },
   { path: "/My-ticket", name: "My Ticket", component: "MyTickets", icon: MyTicektsIcon },
 ];
 
 export default routes;
 