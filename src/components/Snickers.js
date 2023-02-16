import React from "react";
import { Link } from "react-router-dom";

import SnickersImg from "../static/Snickers.jpg";

function Snickers() {
  return (
    <div className="CocaCola">
      <img src={SnickersImg} alt="Snickers bar" />
    </div>
  );
}

export default Snickers;
