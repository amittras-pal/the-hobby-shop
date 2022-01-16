import { MdOutlineTipsAndUpdates, MdPerson } from "react-icons/md";
import Apps from "../components/views/apps/Apps";
import WordPress from "../components/views/blog/WordPress";
import Medium from "../components/views/blog/Medium";
import Hobbies from "../components/views/hobbies/Hobbies";
import Home from "../components/views/home/Home";

const routeMenu = [
  {
    label: "Home",
    path: "/home",
    icon: MdPerson,
    element: <Home />,
    showInMenu: true,
  },
  {
    label: "Hobbies",
    path: "/hobbies",
    icon: MdOutlineTipsAndUpdates,
    element: <Hobbies />,
    showInMenu: true,
  },
  {
    label: "Blog",
    path: "/wordpress-blog",
    element: <WordPress />,
    showInMenu: false,
  },
  {
    label: "Blog",
    path: "/medium-blog",
    element: <Medium />,
    showInMenu: false,
  },
  {
    label: "Apps",
    path: "/apps",
    element: <Apps />,
    showInMenu: false,
  },
];

export default routeMenu;
