import { useState } from "react";
import { AllHistory } from "./AllHistory";
import { YourHistoryTable } from "./YourHistory";

export function SwitchHistory(){
    const [history1, setHistory1] = useState(true);
    const [history2, setHistory2] = useState(false);

    const handleClick1 = ()=>{
        setHistory1(current=> !current);
        setHistory2(current=> !current);
    }



    return(
        <div id="div4switching">
             <button id="allhistory" onClick={handleClick1}><b>All History</b></button>
             <button id="yourhistory" onClick={handleClick1}><b>Your History</b></button>
             {history1 ? <AllHistory/> : <YourHistoryTable/>}
        </div>
    )
}