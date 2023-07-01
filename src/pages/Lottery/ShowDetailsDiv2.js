import {useState} from 'react';
import { DetailsDiv2 } from './DetailsDiv2';

export default function ShowDetailsDiv2() {
  const [isShown, setIsShown] = useState(false);
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setIsShown(current => !current);
    setActive(!active);
  }
      

  return ( 
    <div>
      <button className="details"onClick={handleClick}>{ active ? "Hide" : "Details"}<img src={active ? "assets/detailsarrowup.svg" : "assets/detailsarrowdown.svg"}/></button>
      {isShown && <DetailsDiv2 />}
    </div>
  );
}
