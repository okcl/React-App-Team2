import { useState } from "react";

export function BuyTicketsDiv1(){
    const [isOpen, setIsOpen] = useState(false);
    var containerElement = document.getElementById('App');
   
    const handleClick = () =>{
      /* state can be 1 or 0 */
      setIsOpen(true);
      containerElement.setAttribute( 'class', 'blur');
  };

  return (
    <div class="container-lot">
    <div class="content-window">
      <button className="buttom" id="buyticketsbuttom1" onClick={()=>
      handleClick()
      }>Buy tickets</button>
      {isOpen && (
       <div className="buyTickets">
        <div className="buyTickets2">
          <div id="buyTickHeader">
            <h2>Buy Tickets</h2>
            <button id="closeCross" onClick={() => setIsOpen(false)}><img src="assets/cross.svg" alt=''/></button>
          </div>
          <div id="buyTickCenter">
           <div id="tickLine1">
            <p>
              Buy:
            </p>
            <p>
              Tickets 
              <button id="smallTicket" onClick={() => setIsOpen(false)}>
                  <img src="assets/buyTicketsTicket.svg"/>
              </button>
            </p>
           </div>
           <div id="tickLine2">
            <div id="innerTable">
              <p>
                0
              </p>
              <p>
                ~0.00 CAKE
              </p>
            </div>
           </div>
           <br/>
           <div id="tickLine3">
              <p id="tickLine3left">
                Cost (CAKE)
              </p>
              <p id="tickLine3right">
                0 CAKE
              </p>
           </div>
           <div id="tickLine4">
              <div id="tickLine4left">
                <p>
                  0%
                </p>
                <p>
                  Bulk discount
                </p>
                <div>
                  <img src="assets/questionMark.svg"/>
                </div>
              </div>
              <p id="tickLine4right">
                ~0 CAKE
              </p>
           </div>
              <hr/>
           <div id="tickLine5">
              <p>You pay</p>
              <p>~0 CAKE</p>
           </div>  
         
           <button class="buttom"><b>Connect Wallet</b></button>

           <p id="textBelow">
           "Buy Instantly" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.
           </p>
         </div>
       </div>
       </div>
       )}
       </div>
       </div>
  );
}