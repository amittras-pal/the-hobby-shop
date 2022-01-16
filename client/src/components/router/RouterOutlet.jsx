import React from "react";
import { Route, Routes } from "react-router-dom";
import routeMenu from "../../constants/routeMenu";

function RouterOutlet() {
  return (
    <Routes>
      {routeMenu.map((item) => (
        <Route path={item.path} element={item.element} key={item.label} />
      ))}
    </Routes>
  );
}

export default RouterOutlet;
