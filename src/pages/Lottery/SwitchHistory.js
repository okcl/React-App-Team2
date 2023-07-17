import { useState } from "react";
import { AllHistory } from "./AllHistory";
import { YourHistoryTable } from "./YourHistory";

export function SwitchHistory() {
  const [history1, setHistory1] = useState(true);

  const handleClick1 = (result) => {
    setHistory1(() => result);
  };

  return (
    <div id="div4switching">
      <button
        id="allhistory"
        className={{history1} ? "active-button" : "inactive-button"}
        onClick={() => handleClick1(true)}
      >
        <b>All History</b>
      </button>
      <button 
        id="yourhistory"
        className={{history1} ? "inactive-button" : "active-button"} 
        onClick={() => handleClick1(false)}
      >
        <b>Your History</b>
      </button>
      <br></br>
      {history1 ? <AllHistory /> : <YourHistoryTable />}
    </div>
  );
}
