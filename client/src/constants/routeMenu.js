import { MdApps, MdEditNote, MdHome, MdPerson } from "react-icons/md";
import About from "../components/views/about/About";
import Apps from "../components/views/apps/Apps";
import Blog from "../components/views/blog/Blog";
import Home from "../components/views/home/Home";

const routeMenu = [
  { label: "Home", path: "/", icon: MdHome, element: <Home /> },
  { label: "About", path: "/about", icon: MdPerson, element: <About /> },
  { label: "Blog", path: "/blog", icon: MdEditNote, element: <Blog /> },
  { label: "Apps", path: "/apps", icon: MdApps, element: <Apps /> },
];

export default routeMenu;
