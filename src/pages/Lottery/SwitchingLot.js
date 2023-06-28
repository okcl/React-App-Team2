import { useState } from "react"

export function SwitchingBtn(){
    const[style, setStyle] = useState("unclicked");
    const handleToggleChange=()=>{
       setStyle("clicked")
    }
    return(
    <div className="toggle-container">
        <button className={style} onClick={handleToggleChange}><b>All History</b></button>
        <button className={style} onClick={handleToggleChange}><b>Your History</b></button>
    </div>
    )
}