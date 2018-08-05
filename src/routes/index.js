import Dashboard from "../layout/dashboard-layout";
import Master from "../layout/master-layout";

const indexRoutes = [{ path: "/home", component: Master }, { path: "/dashboard", component: Dashboard },
{ redirect: true, path: "/", to: "/home", navbarName: "Redirect" }];

export default indexRoutes;
