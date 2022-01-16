import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/appHeader/AppHeader";
import RouterOutlet from "./components/router/RouterOutlet";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <RouterOutlet />
    </BrowserRouter>
  );
}

export default App;
