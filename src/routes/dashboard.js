// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views
import DashboardPage from "../pages/dashboard/dashboard";
import ListPage from "../pages/list/list";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/list",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: ListPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;