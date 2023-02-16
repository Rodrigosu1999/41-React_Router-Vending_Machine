import React from "react";
import { Link } from "react-router-dom";

import CokeImg from "../static/Coca-Cola.jpg";

function CocaCola() {
  return (
    <div className="CocaCola">
      <img src={CokeImg} alt="Coca-Cola can" />
    </div>
  );
}

export default CocaCola;
