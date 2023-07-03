import { Link, useLocation } from 'react-router-dom';
import React from 'react';


function Navbar() {
    const location = useLocation();
    const tradingRewardLocation = location.pathname === '/trading-reward'
  return (
    <div>
      <header className="nav">
          <nav>
              <div className="nav1">
                  <div className="nav-logo">
                    <Link to="/">
                      <img className="logo" src="/assets/svgexport-3.svg" alt="" style={{width:160}}/>
                      <img className="logo-mobile" src="/assets/svgexport-2.svg" alt=""/>
                    </Link>
                  </div>
                  <div className="nav-menu">
                      <div className="nav-trade">
                          <div className="link"><Link to="/">Trade</Link></div>
                          <div className="down-menu">
                              <div><Link to="/">Swap</Link></div>
                              <div><Link to="/">Limit</Link></div>
                              <div><Link to="/">Liquidity</Link></div>
                              <div><Link to="/">Perpetual</Link></div>
                              <div><Link to="/">Bridge</Link></div>
                              <div><Link to="/">Limit (V2)</Link></div>
                          </div>
                      </div>
                      <div className="nav-earn">
                        <div className="link"><Link to="/">Earn</Link></div>
                        <div className="down-menu">
                          <div><Link to="/">Farms</Link></div>
                          <div><Link to="pools">Pools</Link></div>
                        </div>
                      </div>
                      <div className="nav-win">
                        <div id={tradingRewardLocation ? "winLinkActivated" : "winLink"} className="link"><Link to="/">Win</Link></div>
                        <div className="down-menu">
                          <div className={tradingRewardLocation ? "tradingRewardLinkActivated" : "tradingRewardLink"}><Link to="/trading-reward">Trading Reward
                          <div>
                                LIVE
                            </div></Link></div>
                          <div><Link to="/">Trading Competition</Link></div>
                          <div><Link to="/">Prediction (BETA)</Link></div>
                          <div><Link to="/lottery">Lottery</Link></div>
                          <div><Link to="/">Pottery (BETA)</Link></div>
                        </div>
                      </div>
                      <div className="nav-nft">
                        <div className="link"><Link to="/">NFT</Link></div>
                        <div className="down-menu">
                          <div><Link to="/">Overview</Link></div>
                          <div><Link to="/">Collections</Link></div>
                          <div><Link to="/">Activity</Link></div>
                        </div>
                      </div>
                      <div className="nav-extra">
                          <div className="link">
                            <Link to="/">
                              <img src="/assets/svgexport-5.svg" alt="" />
                            </Link>
                          </div>
                          <div className="down-menu">
                              <div><Link to="/">Info</Link></div>
                              <div><Link to="/ifo">IFO</Link></div>
                              <div><Link to="/">Affiliate Program</Link></div>
                              <div><Link to="/">Voting</Link></div>
                              <div><Link to="/">Leaderboard</Link></div>
                              <div><Link to="/">Blog</Link></div>
                              <div><Link to="/">Docs</Link></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="nav2">
                  <div className="nav-currentprice">
                    <Link to="/">
                      <img src="/assets/svgexport-6.svg" alt="" style={{width:24}}/>
                      <div className="text-currency">$3.657</div>
                    </Link>
                  </div>
                  <div className="nav-language">
                      <div className="nav-lang">
                          <button className="lang-select-btn">
                              <img src="/assets/svgexport-7.svg" alt="" style={{width:24}}/>
                          </button>
                          <div className="lang-down-menu">
                              <button className="lang-item">English</button>
                              <button className="lang-item">Deutsch</button>
                              <button className="lang-item">Espanol</button>
                              <button className="lang-item">Français</button>
                              <button className="lang-item">Polski</button>
                              <button className="lang-item">Türkçe</button>
                          </div>
                      </div>
                  </div>
                  <div className="nav-settings">
                      <button>
                          <img src="/assets/svgexport-8.svg" alt="" style={{width:24}}/>
                      </button>
                  </div>
                  <div className="nav-network">
                      <div className="network-select-link">
                          <div className="link-img">
                          <img src="/assets/bnb.png" alt="" />
                          </div>
                          <div className="link-text">
                          <div className="link-text-desktop">BNB Smart Chain</div>
                          <div className="link-text-mobile">BNB</div>
                          </div>
                          <img src="/assets/svgexport-9.svg" alt="" />
                      </div>
                      <div className="network-select-content">
                          <div className="network-select-text">
                              <div className="select-network-txt">Select a Network</div>
                          </div>
                          <hr />
                          <button className="active">
                              <img src="/assets/bnb.png" alt="" />
                              <div className="btn-text">BNB Smart Chain</div>
                          </button>
                          <button>
                              <img src="/assets/eth.png" alt="" />
                              <div className="btn-text">Etherium</div>
                          </button>
                          <button>
                              <img src="/assets/apt.png" alt="" />
                              <div className="btn-text">Aptos</div>
                          </button>
                      </div>
                  </div>
                  <button className="nav-connect">
                      <div className="connect-btn">Connect Wallet</div>
                      <div className="connect-btn-mobile">Connect</div>
                  </button>
              </div>
          </nav>
      </header>

      <div className="mobile-nav-wrap">
        <div className="mobile-nav">
          <div className="mbnav-el">
            <div className="mbnav-btn">
                <div className="mbnav-btn">
                    <span>
                        <Link to="/" style={{opacity: 1}}>
                            <div className="mnav-btn-cntnt" height="100%">
                                <div className="mnbc-svg"><img src="/assets/svgexport-49.svg" alt="" /></div>
                                <div className="mnbc-txt">Trade</div>
                            </div>
                        </Link>
                    </span>
                </div>
            </div>
            <div className="mbnav-list">
                <div className="mnli-el">
                    <Link to="/">
                        Swap
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="/">
                        Liquidity
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="/">
                        Perpetual
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="/">
                        Bridge
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="/">
                        Limit (V2)
                    </Link>
                </div>
            </div>
          </div>
          <div className="mbnav-el">
            <div className="mbnav-btn">
                <div className="mbnav-btn">
                    <span>
                        <Link to="" style={{opacity: 1}}>
                            <div className="mnav-btn-cntnt">
                                <div className="mnbc-svg"><img src="/assets/svgexport-51.svg" alt="" /></div>
                                <div className="mnbc-txt" color="textSubtle" fontWeight="400" fontSize="10px">Earn</div>
                            </div>
                        </Link>
                    </span>
                </div>
            </div>
            <div className="mbnav-list">
                <div className="mnli-el">
                    <Link to="#">
                        Farms
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="pools">
                        Pools
                    </Link>
                </div>
            </div>
          </div>
          <div className="mbnav-el">
            <div className="mbnav-btn">
                <div className="mbnav-btn">
                    <span>
                        <Link to="" style={{opacity: 1}}>
                            <div className="mnav-btn-cntnt">
                                <div className="mnbc-svg"><img src="/assets/svgexport-53.svg" alt=""/></div>
                                <div className="mnbc-txt" color="textSubtle" fontWeight="400" fontSize="10px">Win</div>
                            </div>
                        </Link>
                    </span>
                </div>
            </div>
            <div className="mbnav-list">
                <div className="mnli-el">
                    <Link to="#">
                        Trading Competition
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        Prediction (BETA)
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        Lottery
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        Pottery (BETA)
                    </Link>
                </div>
            </div>
          </div>
          <div className="mbnav-el">
            <div className="mbnav-btn">
                <div className="mbnav-btn">
                    <span>
                        <Link to="" style={{opacity: 1}}>
                            <div className="mnav-btn-cntnt">
                                <div className="mnbc-svg"><img src="/assets/svgexport-55.svg" alt=""/></div>
                                <div className="mnbc-txt" color="textSubtle" fontWeight="400" fontSize="10px" style={{marginLeft: 4}}>NFT</div>
                            </div>
                        </Link>
                    </span>
                </div>
            </div>
            <div className="mbnav-list">
                <div className="mnli-el">
                    <Link to="#">
                        Overview
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        Collections
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        Activity
                    </Link>
                </div>
            </div>
          </div>
          <div className="mbnav-el">
            <div className="mbnav-btn">
                <div className="mbnav-btn">
                    <span>
                        <Link to="" style={{opacity: 1, marginTop: 4}}>
                            <div className="mnav-btn-cntnt" height="100%">
                                <div className="mnbc-svg" height="22px" width="21px"><img src="/assets/svgexport-5.svg" alt="" style={{marginTop: 5}}/></div>
                            </div>
                        </Link>
                        <span className="mbnav-success"></span>
                    </span>
                </div>
            </div>
            <div className="mbnav-list">
                <div className="mnli-el">
                    <Link to="#">
                        Info
                        <div className="mnli-el-new">New</div>
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        IFO
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        Affiliate Program
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        Voting
                        <div className="mnli-el-new">Vote Now</div>
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        Leaderboard
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        Blog
                    </Link>
                </div>
                <div className="mnli-el">
                    <Link to="#">
                        Docs
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
