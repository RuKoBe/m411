import React from "react";
import Collatz from "../pages/Collatz";
import GameOfLife from "../pages/GameOfLife";

const Router = ({ page }) => {
  const getContentForPage = (p) => {
    switch (p) {
      case "collatz":
        return <Collatz />;
      case "gameoflife":
        return <GameOfLife />;
      default:
        return <h1>NotFound</h1>;
    }
  };

  return <>{getContentForPage(page)}</>;
};

export default Router;
