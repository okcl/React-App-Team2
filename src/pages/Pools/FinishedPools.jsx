import { Link } from "react-router-dom"
import React from "react"

function FinishedPools() {
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
                            <Link to="/pools" scale="sm" id="unselected-a">
                                Live
                            </Link>
                            <span>
                                <Link to="/pools/history" id="selected-a">
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
                        <div className="staked-text" color="text" font-size="16px">Staked only</div>
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
                                        <img src="assets/down-arrow-filled.svg" alt="down-arrow" />
                                        <div className="sdropdown-menu">
                                            <ul>
                                                <li>
                                                    <div color="text" font-size="16px" className="s-dropdown-item">APR</div>
                                                </li>
                                                <li>
                                                    <div color="text" font-size="16px" className="s-dropdown-item">Earned</div>
                                                </li>
                                                <li>
                                                    <div color="text" font-size="16px" className="s-dropdown-item">Total Staked</div>
                                                </li>
                                                <li>
                                                    <div color="text" font-size="16px" className="s-dropdown-item">Latest</div>
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
                                <input type="text" placeholder="Search Pools" scale="md" value="" />
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
                        <img src="https://tokens.pancakeswap.finance/images/0xf7DE7E8A6bd59ED41a4b5fe50278b3B7f31384dF.png" className="coinImg" alt="" />
                        <img src="assets/svgexport-6.svg" className="cycle" alt="" />
                      </div>
                      <div className="desc">
                        <div className="header">Earn RDNT</div>
                        <div className="headerDesc">Stake CAKE</div>
                      </div>
                    </div>
                    <div className="column3">
                      <div className="desc">
                        <div className="header">RDNTR Earned</div>
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
                          <div className="subMainDesc">1,881,239 CAKE</div>
                        </div>
                      </div>
                    </div>
                    <div className="column5">
                      <div className="desc">
                        <div className="header">APR</div>
                        <div className="headerDesc">
                          <div className="subMainDesc">0.00%</div>
                        </div>
                      </div>
                    </div>
                    <div className="column6">
                      <div className="desc">
                        <div className="header">Ends in</div>
                        <div className="headerDesc">
                          <div className="header" style={{fontSize: 14}}>-</div>
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
                        <img src="https://tokens.pancakeswap.finance/images/0x8b1f4432F943c465A973FeDC6d7aa50Fc96f1f65.png" className="coinImg" alt="" />
                        <img src="assets/svgexport-6.svg" className="cycle" alt="" />
                      </div>
                      <div className="desc">
                        <div className="header">Earn AXL</div>
                        <div className="headerDesc">Stake CAKE</div>
                      </div>
                    </div>
                    <div className="column3">
                      <div className="desc">
                        <div className="header">RDNTR Earned</div>
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
                          <div className="subMainDesc">62,143 CAKE</div>
                        </div>
                      </div>
                    </div>
                    <div className="column5">
                      <div className="desc">
                        <div className="header">APR</div>
                        <div className="headerDesc">
                          <div className="subMainDesc">0.00%</div>
                        </div>
                      </div>
                    </div>
                    <div className="column6">
                      <div className="desc">
                        <div className="header">Ends in</div>
                        <div className="headerDesc">
                          <div className="header" style={{fontSize: 14}}>-</div>
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
                        <img src="https://tokens.pancakeswap.finance/images/0xf7DE7E8A6bd59ED41a4b5fe50278b3B7f31384dF.png" className="coinImg" alt="" />
                        <img src="assets/svgexport-6.svg" className="cycle" alt="" />
                      </div>
                      <div className="desc">
                        <div className="header">Earn RDNT</div>
                        <div className="headerDesc">Stake CAKE</div>
                      </div>
                    </div>
                    <div className="column3">
                      <div className="desc">
                        <div className="header">RDNTR Earned</div>
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
                          <div className="subMainDesc">2,123,239 CAKE</div>
                        </div>
                      </div>
                    </div>
                    <div className="column5">
                      <div className="desc">
                        <div className="header">APR</div>
                        <div className="headerDesc">
                          <div className="subMainDesc">0.00%</div>
                        </div>
                      </div>
                    </div>
                    <div className="column6">
                      <div className="desc">
                        <div className="header">Ends in</div>
                        <div className="headerDesc">
                          <div className="header" style={{fontSize: 14}}>-</div>
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

export default FinishedPools