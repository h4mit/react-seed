import HomePage from "../pages/master/home/home";
import ContactPage from "../pages/master/contact/contact";
import MapPage from "../pages/master/map/map";
import NewsPage from "../pages/master/news/news";


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
  },
  {
    path: "/home/news",
    sidebarName: "news",
    navbarName: "news",
    icon: "news",
    component: NewsPage
  }
];

export default masterRoutes;