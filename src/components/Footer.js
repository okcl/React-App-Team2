import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-wrapper">
                    <div id="links-footer">
                        <div className="about">
                            <h4>About</h4>
                            <Link to="#"><strong className="yellow">Contact</strong></Link>
                            <Link to="#">Brand</Link>
                            <Link to="#">Blog</Link>
                            <Link to="#">Community</Link>
                            <Link to="#">Litepaper</Link>
                        </div>
                        <div className="help">
                            <h4>Help</h4>
                            <Link to="#">Customer Support</Link>
                            <Link to="#">Troubleshooting</Link>
                            <Link to="#">Guides</Link>
                        </div>
                        <div className="developers">
                            <h4>Developers</h4>
                            <Link to="#">Github</Link>
                            <Link to="#">Documentation</Link>
                            <Link to="#">Bug Bounty</Link>
                            <Link to="#">Audits</Link>
                            <Link to="#">Careers</Link>
                        </div>
                        <img className="desktop" src="/assets/svgexport-36.svg" width="160px" alt="Pancake Swap Logo"/>
                    </div>
                    <img className="mobile" src="/assets/svgexport-36.svg" width="160px" alt="Pancake Swap Logo"/>

                    <div className="icons-footer">
                        <Link to="#"><img src="/assets//svgexport-38.svg" alt="Twitter"/></Link>
                        <div className="telegram"><Link to="#"><img src="/assets/svgexport-39.svg" alt="Telegram"/></Link>
                            <div className="tele-lang">
                                <button className="lang-item"><Link target="_blank" to="https://t.me/pancakeswap">English</Link></button>
                                <button className="lang-item"><Link target="_blank" to="https://t.me/PancakeSwap_DE">Deutsch</Link></button>
                                <button className="lang-item"><Link target="_blank" to="https://t.me/PancakeswapEs">Español</Link></button>
                                <button className="lang-item"><Link target="_blank" to="https://t.me/pancakeswapfr">Français</Link></button>
                                <button className="lang-item"><Link target="_blank" to="https://t.me/PancakeSwapPortuguese">Português</Link></button>
                                <button className="lang-item"><Link target="_blank" to="https://t.me/pancakeswapturkiye">Türkçe</Link></button>
                            </div>
                        </div>
                        <Link to="#"><img src="/assets//svgexport-40.svg" alt="Reddit"/></Link>
                        <Link to="#"><img src="/assets//svgexport-41.svg" alt="Instagram"/></Link>
                        <Link to="#"><img src="/assets//svgexport-42.svg" alt="Github"/></Link>
                        <Link to="#"><img src="/assets//svgexport-43.svg" alt="Discord"/></Link>
                        <Link to="#"><img src="/assets//svgexport-44.svg" alt="Youtube"/></Link>        
                    </div>

                    <div className="buttons-footer">

                        <div className="buttons-footer-left">
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>

                            <div className="lang-select">
                                <button className="lang-select-btn">
                                    <img src="/assets//svgexport-7.svg" alt=""/>
                                    <div>EN</div>
                                </button>
                                <div className="lang-select-content">
                                    <button className="lang-item">English</button>
                                    <button className="lang-item">Deutsch</button>
                                    <button className="lang-item">Espanol</button>
                                    <button className="lang-item">Français</button>
                                    <button className="lang-item">Português</button>
                                    <button className="lang-item">Türkçe</button>
                                </div>
                            </div>
                        </div>
                        <div className="buttons-footer-right">
                            <div className="currency-price">
                                <Link to="#">
                                    <img src="/assets//svgexport-6.svg" alt="" style={{width: 24}}/>
                                    <div className="text-currency">$3.657</div>
                                </Link>
                            </div>
                            <Link to="#" className="buy-btn">Buy CAKE <img src="/assets//svgexport-10.svg" alt=""/></Link>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="go-top-container">
                <button className="go-top">
                    <Link to="#"><img src="/assets//svgexport-57.svg" alt="arrow-up"/></Link>
                </button>
            </div>
        </div>
    )
}

export default Footer