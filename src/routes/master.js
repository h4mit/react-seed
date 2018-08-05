import HomePage from "../pages/master/home/home";
import ContactPage from "../pages/master/contact/contact";


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
  }
];

export default masterRoutes;