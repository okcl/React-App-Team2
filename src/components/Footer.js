import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer>
                <div class="footer-wrapper">
                    <div id="links-footer">
                        <div class="about">
                            <h4>About</h4>
                            <Link to="#"><strong class="yellow">Contact</strong></Link>
                            <Link to="#">Brand</Link>
                            <Link to="#">Blog</Link>
                            <Link to="#">Community</Link>
                            <Link to="#">Litepaper</Link>
                        </div>
                        <div class="help">
                            <h4>Help</h4>
                            <Link to="#">Customer Support</Link>
                            <Link to="#">Troubleshooting</Link>
                            <Link to="#">Guides</Link>
                        </div>
                        <div class="developers">
                            <h4>Developers</h4>
                            <Link to="#">Github</Link>
                            <Link to="#">Documentation</Link>
                            <Link to="#">Bug Bounty</Link>
                            <Link to="#">Audits</Link>
                            <Link to="#">Careers</Link>
                        </div>
                        <img class="desktop" src="/assets/svgexport-36.svg" width="160px" alt="Pancake Swap Logo"/>
                    </div>
                    <img class="mobile" src="/assets/svgexport-36.svg" width="160px" alt="Pancake Swap Logo"/>

                    <div class="icons-footer">
                        <Link to="#"><img src="/assets//svgexport-38.svg" alt="Twitter"/></Link>
                        <div class="telegram"><Link to="#"><img src="/assets/svgexport-39.svg" alt="Telegram"/></Link>
                            <div class="tele-lang">
                                <button class="lang-item"><Link target="_blank" to="https://t.me/pancakeswap">English</Link></button>
                                <button class="lang-item"><Link target="_blank" to="https://t.me/PancakeSwap_DE">Deutsch</Link></button>
                                <button class="lang-item"><Link target="_blank" to="https://t.me/PancakeswapEs">Español</Link></button>
                                <button class="lang-item"><Link target="_blank" to="https://t.me/pancakeswapfr">Français</Link></button>
                                <button class="lang-item"><Link target="_blank" to="https://t.me/PancakeSwapPortuguese">Português</Link></button>
                                <button class="lang-item"><Link target="_blank" to="https://t.me/pancakeswapturkiye">Türkçe</Link></button>
                            </div>
                        </div>
                        <Link to="#"><img src="/assets//svgexport-40.svg" alt="Reddit"/></Link>
                        <Link to="#"><img src="/assets//svgexport-41.svg" alt="Instagram"/></Link>
                        <Link to="#"><img src="/assets//svgexport-42.svg" alt="Github"/></Link>
                        <Link to="#"><img src="/assets//svgexport-43.svg" alt="Discord"/></Link>
                        <Link to="#"><img src="/assets//svgexport-44.svg" alt="Youtube"/></Link>        
                    </div>

                    <div class="buttons-footer">

                        <div class="buttons-footer-left">
                            <label class="switch">
                                <input type="checkbox"/>
                                <span class="slider"></span>
                            </label>

                            <div class="lang-select">
                                <button class="lang-select-btn">
                                    <img src="/assets//svgexport-7.svg" alt=""/>
                                    <div>EN</div>
                                </button>
                                <div class="lang-select-content">
                                    <button class="lang-item">English</button>
                                    <button class="lang-item">Deutsch</button>
                                    <button class="lang-item">Espanol</button>
                                    <button class="lang-item">Français</button>
                                    <button class="lang-item">Português</button>
                                    <button class="lang-item">Türkçe</button>
                                </div>
                            </div>
                        </div>
                        <div class="buttons-footer-right">
                            <div class="currency-price">
                                <Link to="#">
                                    <img src="/assets//svgexport-6.svg" alt="" style={{width: 24}}/>
                                    <div class="text-currency">$3.657</div>
                                </Link>
                            </div>
                            <Link to="#" class="buy-btn">Buy CAKE <img src="/assets//svgexport-10.svg" alt=""/></Link>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="go-top-container">
                <button class="go-top">
                    <Link to="#"><img src="/assets//svgexport-57.svg" alt="arrow-up"/></Link>
                </button>
            </div>
        </div>
    )
}

export default Footer