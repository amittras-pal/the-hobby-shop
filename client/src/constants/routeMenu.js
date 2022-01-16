import { MdOutlineTipsAndUpdates, MdPerson } from "react-icons/md";
import Apps from "../components/views/apps/Apps";
import Blog from "../components/views/blog/Blog";
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
    path: "/blog",
    element: <Blog />,
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
