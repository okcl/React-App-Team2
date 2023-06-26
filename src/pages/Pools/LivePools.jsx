import React from "react"
import { Link } from "react-router-dom"

function LivePools() {
    return(
        <div className="content">
            <div className="controlboard">
                <div className="cbuttons">
                    <div className="viewstyle-buttons">
                        <button>
                            <img src="assets/boxview.svg" alt="" />
                        </button>
                        <button>
                            <img src="assets/listview.svg" alt="" />
                        </button>
                    </div>
                    <div className="list-switch-w">
                        <div className="list-switch">
                            <Link to="/pools"scale="sm" id="selected-a">
                                Live
                            </Link>
                            <span>
                                <Link to="/pools/history" id="unselected-a">
                                    Finished
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="isstaked">
                        <div className="stake-checkbox">
                            <input type="checkbox" scale="sm" name="stake" id="stake-checkbox" />
                            <div className="sliderr round"></div>
                        </div>
                        <div className="staked-text" color="text" fontSize="16px">Staked only</div>
                    </div>
                </div>
                <div className="csort">
                    <div className="sort-search">
                        <div className="sort-wrap">
                            <div className="sort-text">
                                Sort by
                            </div>
                            <div className="sort">
                                <div className="sselected">
                                    <div className="sbox">
                                        <div className="stext">
                                            Hot
                                        </div>
                                        <img src="assets//down-arrow-filled.svg" alt="down-arrow" />
                                        <div className="sdropdown-menu">
                                            <ul>
                                                <li>
                                                    <div color="text" fontSize="16px" className="s-dropdown-item">APR</div>
                                                </li>
                                                <li>
                                                    <div color="text" fontSize="16px" className="s-dropdown-item">Earned</div>
                                                </li>
                                                <li>
                                                    <div color="text" fontSize="16px" className="s-dropdown-item">Total Staked</div>
                                                </li>
                                                <li>
                                                    <div color="text" fontSize="16px" className="s-dropdown-item">Latest</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="search-wrap">
                            <div className="search-text">Search</div>
                            <div className="searchbox">
                                <input type="text" placeholder="Search Pools" scale="md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poolboard">
                <div className="poolcontent">
                    <div className="row">
                        <div className="column1">
                          <div className="imgContainer">
                            <img src="assets//svgexport-6.svg" className="coinImg" alt="" />
                            <img src="assets/green-reflesh.svg" className="cycle" alt="" />
                          </div>
                          <div className="desc">
                            <div className="header">Stake CAKE</div>
                            <div className="headerDesc">Stake, Earn - And more!</div>
                          </div>
                        </div>
                        <div className="column3">
                          <div className="desc">
                            <div className="header">CAKE Staked</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">0.0</div>
                              <div className="subDesc">0 USD</div>
                            </div>
                          </div>
                        </div>
                        <div className="column4">
                          <div className="desc">
                            <div className="header">Flexible APY</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">0.85%</div>
                              <img src="assets/calculator.svg" className="descImg" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="column5">
                          <div className="desc">
                            <div className="header">Locked APR</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">Up to 18.22%</div>
                              <img src="assets/calculator.svg" className="descImg" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="column6">
                          <div className="desc">
                            <div className="header">Total staked</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">229,069,913 CAKE</div>
                            </div>
                          </div>
                        </div>
                        <div className="column7">
                          <div className="desc">
                            <div className="header">Details</div>
                            <div className="headerDesc">
                              <img src="assets/down-arrow-blue.svg" alt="" />
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column1">
                          <div className="imgContainer">
                            <img src="https://tokens.pancakeswap.finance/images/0xBdEAe1cA48894A1759A8374D63925f21f2Ee2639.png" className="coinImg" alt="" />
                            <img src="assets//svgexport-6.svg" className="cycle" alt="" />
                          </div>
                          <div className="desc">
                            <div className="header">Earn EDU</div>
                            <div className="headerDesc">Stake CAKE</div>
                          </div>
                        </div>
                        <div className="column3">
                          <div className="desc">
                            <div className="header">EDU Earned</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">0.0</div>
                              <div className="subDesc">0 USD</div>
                            </div>
                          </div>
                        </div>
                        <div className="column4">
                          <div className="desc">
                            <div className="header">Total staked</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">5,372,633 CAKE</div>
                            </div>
                          </div>
                        </div>
                        <div className="column5">
                          <div className="desc">
                            <div className="header">APR</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">8.92%</div>
                              <img src="assets/calculator.svg" className="descImg" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="column6">
                          <div className="desc">
                            <div className="header">Ends in</div>
                            <div className="headerDesc">
                              <div className="header" style={{fontSize: 14}}>30 days</div>
                              <img src="assets/timer-blue.svg" className="descImg" alt="" width="20px" />
                            </div>
                          </div>
                        </div>
                        <div className="column7">
                          <div className="desc">
                            <div className="header">Details</div>
                            <div className="headerDesc">
                              <img src="assets/down-arrow-blue.svg" alt="" />
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column1">
                          <div className="imgContainer">
                            <img src="https://tokens.pancakeswap.finance/images/0x91d6d6aF7635B7b23A8CED9508117965180e2362.png" className="coinImg" alt="" />
                            <img src="assets//svgexport-6.svg" className="cycle" alt="" />
                          </div>
                          <div className="desc">
                            <div className="header">Earn USH</div>
                            <div className="headerDesc">Stake CAKE</div>
                          </div>
                        </div>
                        <div className="column3">
                          <div className="desc">
                            <div className="header">USH Earned</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">0.0</div>
                              <div className="subDesc">0 USD</div>
                            </div>
                          </div>
                        </div>
                        <div className="column4">
                          <div className="desc">
                            <div className="header">Total staked</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">4,093,360 CAKE</div>
                            </div>
                          </div>
                        </div>
                        <div className="column5">
                          <div className="desc">
                            <div className="header">APR</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">9.71%</div>
                              <img src="assets/calculator.svg" className="descImg" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="column6">
                          <div className="desc">
                            <div className="header">Ends in</div>
                            <div className="headerDesc">
                              <div className="header" style={{fontSize: 14}}>26 days</div>
                              <img src="assets/timer-blue.svg" className="descImg" alt="" width="20px" />
                            </div>
                          </div>
                        </div>
                        <div className="column7">
                          <div className="desc">
                            <div className="header">Details</div>
                            <div className="headerDesc">
                              <img src="assets/down-arrow-blue.svg" alt="" />
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column1">
                          <div className="imgContainer">
                            <img src="https://tokens.pancakeswap.finance/images/0x4C882ec256823eE773B25b414d36F92ef58a7c0C.png" className="coinImg" alt="" />
                            <img src="assets//svgexport-6.svg" className="cycle" alt="" />
                          </div>
                          <div className="desc">
                            <div className="header">Earn PSTAKE</div>
                            <div className="headerDesc">Stake CAKE</div>
                          </div>
                        </div>
                        <div className="column3">
                          <div className="desc">
                            <div className="header">PSAKE Earned</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">0.0</div>
                              <div className="subDesc">0 USD</div>
                            </div>
                          </div>
                        </div>
                        <div className="column4">
                          <div className="desc">
                            <div className="header">Total staked</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">1,569,188 CAKE</div>
                            </div>
                          </div>
                        </div>
                        <div className="column5">
                          <div className="desc">
                            <div className="header">APR</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">10.48%</div>
                              <img src="assets/calculator.svg" className="descImg" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="column6">
                          <div className="desc">
                            <div className="header">Ends in</div>
                            <div className="headerDesc">
                              <div className="header" style={{fontSize: 14}}>25 days</div>
                              <img src="assets/timer-blue.svg" className="descImg" alt="" width="20px" />
                            </div>
                          </div>
                        </div>
                        <div className="column7">
                          <div className="desc">
                            <div className="header">Details</div>
                            <div className="headerDesc">
                              <img src="assets/down-arrow-blue.svg" alt="" />
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column1">
                          <div className="imgContainer">
                            <img src="https://tokens.pancakeswap.finance/images/0x2dfF88A56767223A5529eA5960Da7A3F5f766406.png" className="coinImg" alt="" />
                            <img src="assets//svgexport-6.svg" className="cycle" alt="" />
                          </div>
                          <div className="desc">
                            <div className="header">Earn PSTAKE</div>
                            <div className="headerDesc">Stake CAKE</div>
                          </div>
                        </div>
                        <div className="column3">
                          <div className="desc">
                            <div className="header">PSAKE Earned</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">0.0</div>
                              <div className="subDesc">0 USD</div>
                            </div>
                          </div>
                        </div>
                        <div className="column4">
                          <div className="desc">
                            <div className="header">Total staked</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">2,669,581 CAKE</div>
                            </div>
                          </div>
                        </div>
                        <div className="column5">
                          <div className="desc">
                            <div className="header">APR</div>
                            <div className="headerDesc">
                              <div className="subMainDesc">9.09%</div>
                              <img src="assets/calculator.svg" className="descImg" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="column6">
                          <div className="desc">
                            <div className="header">Ends in</div>
                            <div className="headerDesc">
                              <div className="header" style={{fontSize: 14}}>24 days</div>
                              <img src="assets/timer-blue.svg" className="descImg" alt="" width="20px" />
                            </div>
                          </div>
                        </div>
                        <div className="column7">
                          <div className="desc">
                            <div className="header">Details</div>
                            <div className="headerDesc">
                              <img src="assets/down-arrow-blue.svg" alt="" />
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="plogo">
                <img src="assets/3d-syrup-bunnies.png" alt="illustration" />
            </div>
        </div>
    )
}

export default LivePools