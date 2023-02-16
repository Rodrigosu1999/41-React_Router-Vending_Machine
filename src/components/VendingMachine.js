import React from "react";
import { Link } from "react-router-dom";

import VendingMachineImg from "../static/VendingMachine.jpg";
import "../styles/VendingMachine.css"

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <img className="VendingMachine-img" src={VendingMachineImg} alt="Vending Machine" />
      <div>
        <h1><Link to="/lays">Lay's</Link></h1>
        <h1><Link to="/coke">Coca-Cola</Link></h1>
        <h1><Link to="/snickers">Snickers</Link></h1>
      </div>
    </div>
  );
}

export default VendingMachine;
