import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Inicio",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    path: "/user-page",
    name: "Mi Perfil",
    icon: "nc-icon nc-badge",
    component: UserPage
  },
  {
    path: "/icons",
    name: "Formatos",
    icon: "nc-icon nc-tile-56",
    component: Icons
  },
  // { path: "/maps", name: "Maps", icon: "nc-icon nc-pin-3", component: Maps },
  // {
  //   path: "/notifications",
  //   name: "Lista de Usuarios",
  //   icon: "nc-icon nc-single-02",
  //   component: Notifications
  // },
  {
    path: "/tables",
    name: "Lista de Usuarios",
    icon: "nc-icon nc-single-02",
    component: TableList
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship"
  // },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
