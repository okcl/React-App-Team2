import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="nav">
        <nav>
            <div className="nav1">
                <div className="nav-logo">
                  <Link to="/">
                    <img className="logo" src="./assets/svgexport-3.svg" alt="" style={{width:160}}/>
                    <img className="logo-mobile" src="././public/svgexport-2.svg" alt=""/>
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
                        <div><Link to="/">Pools</Link></div>
                      </div>
                    </div>
                    <div className="nav-win">
                      <div className="link"><Link to="/">Win</Link></div>
                      <div className="down-menu">
                        <div><Link to="/">Trading Reward</Link></div>
                        <div><Link to="/">Trading Competition</Link></div>
                        <div><Link to="/">Prediction (BETA)</Link></div>
                        <div><Link to="/">Lottery</Link></div>
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
                            <img src="./public/svgexport-5.svg" alt="" />
                          </Link>
                        </div>
                        <div className="down-menu">
                            <div><Link to="/">Info</Link></div>
                            <div><Link to="/">IFO</Link></div>
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
                    <img src="./public/svgexport-6.svg" alt="" style={{width:25}}/>
                    <div className="text-currency">$3.657</div>
                  </Link>
                </div>
                <div className="nav-language">
                    <div className="nav-lang">
                        <button className="lang-select-btn">
                            <img src="./public/svgexport-7.svg" alt="" style={{width:25}}/>
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
                        <img src="./public/svgexport-8.svg" alt="" style={{width:25}}/>
                    </button>
                </div>
                <div className="nav-network">
                    <div className="network-select-link">
                        <div className="link-img">
                        <img src="./public/bnb.png" alt="" />
                        </div>
                        <div className="link-text">
                        <div className="link-text-desktop">BNB Smart Chain</div>
                        <div className="link-text-mobile" style={{display: 'hidden'}}>BNB</div>
                        </div>
                        <img src="./public/svgexport-9.svg" alt="" />
                    </div>
                    <div className="network-select-content">
                        <div className="network-select-text">
                            <div className="select-network-txt">Select a Network</div>
                        </div>
                        <hr />
                        <button className="active">
                            <img src="./public/bnb.png" alt="" />
                            <div className="btn-text">BNB Smart Chain</div>
                        </button>
                        <button>
                            <img src="./public/eth.png" alt="" />
                            <div className="btn-text">Etherium</div>
                        </button>
                        <button>
                            <img src="./public/apt.png" alt="" />
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
  );
}

export default Navbar;
