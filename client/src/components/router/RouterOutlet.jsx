import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routeMenu from "../../constants/routeMenu";

function RouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={"/home"} />} />
      {routeMenu.map((item) => (
        <Route path={item.path} element={item.element} key={item.label} />
      ))}
    </Routes>
  );
}

export default RouterOutlet;
