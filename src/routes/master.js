import HomePage from "../pages/master/home/home";
import ContactPage from "../pages/master/contact/contact";
import MapPage from "../pages/master/map/map";


const masterRoutes = [
  {
    path: "/home",
    sidebarName: "Home Page",
    navbarName: "Home Page",
    icon: "home",
    component: HomePage
  },
  {
    path: "/home/contact",
    sidebarName: "Contact",
    navbarName: "Contact",
    icon: "contact",
    component: ContactPage
  },
  {
    path: "/home/map",
    sidebarName: "Map",
    navbarName: "Map",
    icon: "map",
    component: MapPage
  }
];

export default masterRoutes;