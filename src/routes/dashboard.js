import DashboardPage from "../pages/dashboard/dashboard";
import ListPage from "../pages/dashboard/list/list";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: "Dashboard",
    component: DashboardPage
  },
  {
    path: "/dashboard/list",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: ListPage
  }
];

export default dashboardRoutes;