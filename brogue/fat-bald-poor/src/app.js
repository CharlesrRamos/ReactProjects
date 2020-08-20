import React, { useState } from "react";
import Switch from "../src/componets/Switch";

const initialStal = {
  fat: false,
  bald: false,
  poor: false,
};

const App = () => {
  const [switches, setSwitches] = useState(initialStal);

  const toggleSwitches = (id) => {
    const currentState = switches[id];
    if (currentState === undefined) return;

    const activeSwitches = Object.values(switches).filter((value) => value)
      .length;

    const maxActive = Object.values(switches).length - 1;

    const newState = activeSwitches === maxActive ? initialStal : switches;

    setSwitches({ ...newState, [id]: !currentState }); // todos os switchs do jeito que estiverem vão continuar e vou sobrescrever com o contrario do currentstate.
  };

  return (
    <div className="container">
      <h1>Gordo, careca ou pobre</h1>
      <Switch
        onClick={toggleSwitches}
        id="fat"
        active={switches["fat"]}
        label="Gordo"
      />
      <Switch
        onClick={toggleSwitches}
        id="bald"
        active={switches["bald"]}
        label="Careca"
      />
      <Switch
        onClick={toggleSwitches}
        id="poor"
        active={switches["poor"]}
        label="Pobre"
      />
    </div>
  );
};

export default App;
