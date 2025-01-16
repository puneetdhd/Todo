import './css/nav.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CategoriesSidebar from './sidebar';
import { useState } from 'react';

export default function Navbar() {
    let [click,setClick]=useState(false);
    const triggerfn = () => {
        setClick((prev) => !prev); // Toggle state
      };
    
  return (
    <div className="container">
      <nav className="nav">
        {/* <a href="#">Explore</a>
        <a href="#">Shop</a>
        <button>Menu</button> */}

        <a onClick={triggerfn}><DensityMediumIcon/></a>
        <a onClick={searchfn}><SearchIcon/></a>
        <a onClick={widgetfn}><WidgetsIcon/></a>
        
      </nav>
      {click && <CategoriesSidebar click={click} setClick={setClick} className="component" />}
      

    </div>
  )
}