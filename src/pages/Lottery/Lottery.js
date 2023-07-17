import TheCountUp from "../../components/CountUp";
import  ShowDetails  from "./ShowDetails";
import ShowDetailsDiv2 from "./ShowDetailsDiv2";
import { SwitchHistory } from "./SwitchHistory";
import { SwitchingBtn } from "./SwitchingLot";

export function Lottery(){
    return (
   <div className="App">
        <div id="div1">

           <div id="images11">
             <img src="assets/star-big.png" className="images1" id="bigstar" alt=""/>
             <img src="assets/star-small.png" className="images1" id="smallstar" alt=""/>
             <img src="assets/ticket-l.png" className="images1" id="ticketl" alt=""/>
           </div>



           <div id="div1content">
              <h1 id="div1h11">The PancakeSwap Lottery</h1>
              <p id="div1price">$<TheCountUp end={44294} duration={2}/></p>
              <h1 id="div1h12">in prizes!</h1>
              <div id="buyticketsbuttom">
              <img src="assets/ticket.svg" id="backticket" alt=""/>
              <button className="buttom" id="buyticketsbuttom1">Buy tickets</button>
              </div>
               </div>

           <div id="images12">
             <img src="assets/three-stars.png" className="images1" id="threestars" alt=""/>
             <img src="assets/ticket-r.png" className="images1" id="ticketr" alt=""/>
           </div>

        </div>
        <div id="div2">
            <div id="div2header"><h2>Get your tickets now!</h2></div>
               <div id="div2linetime">
                 <div id="div2time">
                    <h2>2</h2>
                    <h2>h</h2>
                    <h2>56</h2>
                    <h2>m</h2>
                 </div>
                 <br/>
                 <div id="div2until">
                    <h2>until the draw</h2>
                 </div>
               </div>
           <div id="center">
           <div id="frame">
             <div id="topframe">
                 <div id="text">
                     <p>Next Draw</p>
                     <div id="draw">#875| Draw: Apr 21, 2023, 2:00 AM</div>
                 </div>
             </div>
             <div id="centerframe">
                 <div id="centerframeel">
                     <p id="pricepottext">Prize Pot</p>
                     <div id="theprizepot">
                     <p id="prize">~$<TheCountUp end={51244} duration={1.5}/></p>
                     <div id="cakeamount"><TheCountUp end={15264} duration={1}/> CAKE</div>
                     </div>
                     <p id="yourticketstext">Your tickets</p>
                     <div id="prizepotbutton">
                         <button className="buttom"><b>Buy Tickets</b></button>
                     </div>
                 </div>
             </div>
             <div id="bottomframe">
                 <ShowDetailsDiv2/>
             </div>
           </div>
          </div>
        </div>
        <div id="div3">
            <img src="assets/ticket-l.png" id="div3leftticket" className="div3img"/>

            <div id="div3content">
              <h2 className="textdiv3">Connect your wallet</h2>
              <h2 className="textdiv3">to check if you've won!</h2>
              <button className="buttom"><b>Connect wallet</b></button>
            </div>
            <img src="assets/ticket-r.png" id="div3rightticket" className="div3img"/>
        </div>
        <div id="div4">
             <h2 id="finishedround">Finished Rounds</h2>
           <SwitchHistory/>
        </div>


        <div id="div5">
           <div id="div5content">
             <div id="div5top">
                <h2 className="div5h2"><b>How to play</b></h2>
                <p className="div5p"><b>If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.</b></p>
                <p className="div5p"><b>Simple!</b></p>
             </div>
             <div id="div5cards">
              <div id="div5card1">
                 <div className="div5line1">
                     <p>Step 1</p>
                 </div>
                 <div className="div5line2">
                     <h2>Buy tickets</h2>
                 </div>
                 <div className="div5line3">
                     <p>Prices are set when the round starts, equal to 5 USD in CAKE per ticket.</p>
                 </div>
              </div>
              <div id="div5card2">
                 <div className="div5line1">
                     <p>Step 2</p>
                 </div>
                 <div className="div5line2">
                     <h2>Wait for the Draw</h2>
                 </div>
                 <div className="div5line3">
                     <p>There is one draw every day alternating between 0 AM UTC and 12 PM UTC.</p>
                 </div>
              </div>
              <div id="div5card3">
                     <div className="div5line1">
                     <p>Step 3</p>
                    </div>
                 <div className="div5line2">
                     <h2>Check for Prizes</h2>
                 </div>
                 <div className="div5line3">
                     <p>Once the round’s over, come back to the page and check to see if you’ve won!</p>
                 </div>
              </div>
             </div>
             <hr/>
              <div id="div5text">
                <div id="div5text1">
                  <div id="div5textpart">
                  <div className="div5textheader"><h2>Winning criteria</h2></div>
                  <div className="div5textheader2">
                  <h2>The digits on your ticket must match in the correct order to win.</h2>
                  </div>
                  <div className="div5p1">
                      <p>Here’s an example lottery draw, with two tickets, A and B.</p>
                  </div>
                  <div className="div5p2">
                      <ul>
                          <li>Ticket A: The first 3 digits and the last 2 digits match, but the 4th      digit is wrong, so this ticket only wins a “Match first 3” prize.</li>
                          <li>Ticket B: Even though the last 5 digits match, the first digit is      wrong, so this ticket doesn’t win a prize.</li>
                      </ul>
                  </div>
                  <div className="div5p3">
                      <p>Prize brackets don’t ‘stack’: if you match the first 3 digits in order,      you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and      ‘Match 2’.</p>
                  </div>
                  </div>
                   <div id="div5table">
                      <div id="raw1">
                          <img src="assets/div5ball1.svg" alt=""/>
                          <img src="assets/div5ball2.svg" alt=""/>
                          <img src="assets/div5ball3.svg" alt=""/>
                          <img src="assets/div5ball4.svg" alt=""/>
                          <img src="assets/div5ball5.svg" alt=""/>
                          <img src="assets/div5ball6.svg" alt=""/>
                      </div>
                      <div id="raw2">
                          <h2 className="tableH2">A</h2>
                          <img src="assets/div5raw2.svg" alt=""/>
                      </div>
                      <div id="raw3">
                          <h2 className="tableH2">B</h2>
                          <img src="assets/div5raw3.svg" alt=""/>
                      </div>
                   </div>
                 </div>
             <hr/>
           <div id="div5text2">
             <div id="div5textpart2">
             <div className="div5textheader"><h2>Prize Funds</h2></div>
             <div className="div5p1">
                 <p>The prizes for each lottery round come from three sources:</p>
             </div>
             <div className="div5textheader2">
                 <h2>Ticket Purchases</h2>
             </div>
             <div className="div5p2">
                 <ul>
                     <li>100% of the CAKE paid by people buying tickets that round goes back into the prize pools.</li>
                 </ul>
             </div>
             <div className="div5textheader2">
                 <h2><div className="div5textheader2"><b>Rollover Prizes</b></div></h2>
             </div>
             <div className="div5p2">
                 <ul>
                     <li>After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket rolls over into the next round and are redistributed among the prize pools.</li>
                 </ul>
             </div>
             <div className="div5textheader2">
                 <h2><div className="div5textheader2">CAKE Injections</div></h2>
             </div>
             <div className="div5p2">
                 <ul>
                     <li>An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a week. This CAKE is of course also included in rollovers! Read more in our guide to <a href="cake tokenomics" className="div5link">CAKE Tokenomics</a></li>
                 </ul>
             </div>Name
             </div>
             <div id="table2">
                 <div id="t2raw1">
                     <img src="assets/div5table.svg" alt=""/>
                 </div>
                 <div id="t2raw2">
                     <div id="column1">
                      <h5 className="columnheader">DIGITS MATCHED</h5>
                         <ul>
                             <li className="column1li"><div className="circle" id="c1"></div>Matches first 1</li>
                             <li className="column1li"><div className="circle" id="c2"></div>Matches first 2</li>
                             <li className="column1li"><div className="circle" id="c3"></div>Matches first 3</li>
                             <li className="column1li"><div className="circle" id="c4"></div>Matches first 4</li>
                             <li className="column1li"><div className="circle" id="c5"></div>Matches first 5</li>
                             <li className="column1li"><div className="circle" id="c6"></div>Matches all 6</li>
                             <li className="column1li"><div className="circle" id="c7"></div>Burn pool</li>
                         </ul>
                     </div>
                     <div id="column2">
                      <h5 className="columnheader">PRIZE POOL ALLOCATION</h5>
                         <ul>
                             <li className="clumn2li">2%</li>
                             <li className="clumn2li">3%</li>
                             <li className="clumn2li">5%</li>
                             <li className="clumn2li">10%</li>
                             <li className="clumn2li">20%</li>
                             <li className="clumn2li">40%</li>
                             <li className="clumn2li">20%</li>
                         </ul>
                      </div>
                    </div>
             </div>
           </div>
           <hr/>
             </div>
           <div id="div5bottom">
             <img src="assets/tombola.png" id="paintinrabbit" alt=""/>
             <div id="div5bottomtext">
                 <h2>Still got questions?</h2>
                 <p>Check our in-depth guide on <a href="link" className="div5link">how to play the PancakeSwap lottery!</a></p>
             </div>
            </div>
           </div>
        </div>
   </div>
 );
}
