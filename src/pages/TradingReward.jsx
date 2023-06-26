import React from "react"

const TradingReward = () => {
    
    return (
        <div className="tradingReward">
            {/* --------------- Toolbar ----------------- */}
            <section className="toolbar">
                <div className="toolbarItemSelected">
                    <a href="#">Trading Reward</a>
                </div>
                <div className="toolbarItem">
                    <a href="#">Trading Competition</a>
                </div>
                <div className="toolbarItem">
                    <a href="#">Prediction (BETA)</a>
                </div>
                <div className="toolbarItem">
                    <a href="./lottery/lottery.html">Lottery</a>
                </div>
                <div className="toolbarItem">
                    <a href="#">Pottery (BETA)</a>
                </div>
            </section>
            {/* ---------------- Section 1 --------------- */}
            <section className="section1">
                <div className="section1MovingParts">
                    <img src="/assets/trading-reward-star1.png" alt="star1"/>
                    <img src="/assets/trading-reward-star2.png" alt="star2"/>
                    <img src="/assets/trading-reward-star3.png" alt="star3"/>
                    <img src="/assets/trading-reward-butter-1.png" alt="butter1"/>
                    <img src="/assets/trading-reward-butter-2.png" alt="butter-2"/>
                </div>
                <div class="section1Container">
                    
                    <div class="section1Left">
                        <div>Trading Reward</div>
                        <div>5% trading rebate to be earned!</div>
                        <div>Earn CAKE while trading your favorite tokens on PancakeSwap.</div>
                        <div>
                            <a href="#">
                                Start Trading
                            </a>
                            <a href="#">
                                How to Earn
                            </a>
                        </div>
                    </div>
                    <div className="section1Right">
                        <div className="section1RightImage">
                            <img src="/assets/trading-reward-banner-bunny.webp" alt="trading reward banner bunny"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* --------------- Section 2 --------------*/}
            <section className="section2">
                <div className="section2Container">
                    <h2 id="yourTradingReward">Your Trading Reward</h2>
                    <div className="section2BannerContainer">
                        <div className="section2Banner">
                            <h2>Connect wallet to view your trading volume and rewards</h2>
                            <button>Connect Wallet</button>
                        </div>
                    </div>
                    <div className="section2FloatingImages">
                        <img className="left-bunny" src="/assets/trading-reward-left-bunny.png" alt="left bunny"/>
                        <img className="right-bunny" src="/assets/trading-reward-right-bunny.png" alt="right bunny"/>
                        <img className="love-butter" src="/assets/trading-reward-love-butter.png" alt="love butter"/>

                    </div>
                    
                </div>
            </section>

            {/* --------------- Section 3 -------------- */}
            <section className="section3">
                <div className="section3Container">
                    <h2 className="section3Title">Current Reward Pool</h2>
                    <div className="section3Columns">
                        <div className="section3ColumnItem">
                            <h2>Starts</h2>
                            <h2>On May 18, 2023, 07:00</h2>
                        </div >
                        <div className="section3ColumnItem">
                            <h2>Ends</h2>
                            <h2>in 23d 5h 0m</h2>
                        </div>
                        <div className="section3ColumnItem">
                            <h2>Total volume generated</h2>
                            <h2>$16,715,421.900</h2>
                        </div>
                        <div className="section3ColumnItem">
                            <h2>Total reward to distribute</h2>
                            <h2>207 in CAKE</h2>
                        </div>
                        <div className="section3ColumnItem">
                            <h2>Number of eligible pairs</h2>
                            <div className="viewPairs">
                                <h2>18</h2>
                                <button className="viewPairsButton">View Pairs</button>
                            </div>
                        </div>
                        <div className="viewPairsButtonMobileContainer">
                            <button className="viewPairsButtonMobile">View Pairs</button>
                        </div>
                    </div>
                    <div className="section3AbsoluteImages">
                        <img src="/assets/trading-reward-pool-1.png" alt="pool-1"/>
                        <img src="/assets/trading-reward-pool-2.png" alt="pool-2"/>
                    </div>
                </div>
            </section>

            {/* --------------- Section 4 -------------- */}
            <section className="section4">
                <div className="section4ContainerShadow">
                    <div className="section4Container">
                        <h2>How to Earn</h2>
                        <div className="section4Cards">
                            <div className="card">
                                <div className="section4CardTop">
                                    <p>Step 1</p>
                                    <img src="/assets/trading-reward-step1-1.webp" alt="step-1"/>
                                </div>
                                <h2>Look for eligible pairs</h2>
                                <p>Use the hot token list on the Swap page to check which pairs are eligible for trading rewards.</p>
                            </div>
                            <div className="card">
                                <div className="section4CardTop">
                                    <p>Step 2</p>
                                    <img src="/assets/trading-reward-step2-1.webp" alt="step-2"/>
                                </div>
                                <h2>Start trading</h2>
                                <p>Start trading any eligible pairs to earn rewards in CAKE. The more you trade, the more rewards you will earn from the current reward pool</p>
                            </div>
                            <div className="card">
                                <div className="section4CardTop">
                                    <p>Step 3</p>
                                    <img src="/assets/trading-reward-step3-1.webp" alt="step-3"/>
                                </div>
                                <h2>Track your volume and rewards</h2>
                                <p>Come back on this page to check your volume and rewards in real time.</p>
                            </div>
                            <div className="card">
                                <div className="section4CardTop">
                                    <p>Step 4</p>
                                    <img src="/assets/trading-reward-step4-1.webp" alt="step-4"/>
                                </div>
                                <h2>Claim your rewards</h2>
                                <p>After each period ends, come back to this page and claim your rewards from the previous periods.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="section4LearnMore">
                    <button >
                        <span>Learn More</span>
                        <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 jCMRod"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default TradingReward
