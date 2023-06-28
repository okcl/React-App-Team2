const SRow = ({ imgSrc, name, earned, totalStaked, apr, ending}) => {
    return(
        <div className="row">
            <div className="column1">
              <div className="imgContainer">
                <img src={imgSrc} className="coinImg" alt="" />
                <img src="https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png" className="cycle" alt="" />
              </div>
              <div className="desc">
                <div className="header">Earn {name}</div>
                <div className="headerDesc">Stake CAKE</div>
              </div>
            </div>
            <div className="column3">
              <div className="desc">
                <div className="header">{name} Earned</div>
                <div className="headerDesc">
                  <div className="subMainDesc">0.0</div>
                  <div className="subDesc">{earned} USD</div>
                </div>
              </div>
            </div>
            <div className="column4">
              <div className="desc">
                <div className="header">Total staked</div>
                <div className="headerDesc">
                  <div className="subMainDesc">{addCommasToNumber(totalStaked)} CAKE</div>
                </div>
              </div>
            </div>
            <div className="column5">
              <div className="desc">
                <div className="header">APR</div>
                <div className="headerDesc">
                  <div className="subMainDesc">{apr}%</div>
                </div>
              </div>
            </div>
            <div className="column6">
              <div className="desc">
                <div className="header">Ends in</div>
                <div className="headerDesc">
                  <div className="header" style={{fontSize: 14}}>{ending}-</div>
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
    )
    function addCommasToNumber(number) {
        let str = number.toString();
        let chars = str.split("");
        chars.reverse();
        
        for (let i = 3; i < chars.length; i += 4) {
          chars.splice(i, 0, ",");
        }
        
        chars.reverse();
        str = chars.join("");
        
        return str;
    }
};

export default SRow