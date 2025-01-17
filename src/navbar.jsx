import './css/nav.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';

//switch between list and card design
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DashboardIcon from '@mui/icons-material/Dashboard';
//light mode sun
import LightModeIcon from '@mui/icons-material/LightMode';
//dark mode 
import DarkModeIcon from '@mui/icons-material/DarkMode';

import CategoriesSidebar from './sidebar';
import { useState } from 'react';

export default function Navbar() {
    let [click,setClick]=useState(false);
    const [search,setSearch]=useState(false);
    const [mode,setMode]=useState(false);
    const [view,setView]=useState(false);
    const triggerfn = () => {
        setClick((prev) => !prev); // Toggle state
      };

      //this is for the mode light and dark mode(theme)
    const modefn=()=>{
        setMode((prev)=> !prev);
    }
    const searchfn=()=>{
        setSearch(true);
    }
    const viewfn=()=>{
      setView((prev)=>!prev);
    }
  return (
    <div className="container">
      <nav className="nav"
            style={{
                display: 'flex',
                justifyContent: 'space-between', // Space between left and right sections
                alignItems: 'center', // Align items vertically in the center
                padding: '10px',
              }}
      >
        {/* <a href="#">Explore</a>
        <a href="#">Shop</a>
        <button>Menu</button> */}

        <a onClick={triggerfn} style={{ flex: '0 1 auto', marginLeft:'20px'}}><DensityMediumIcon/></a>

        {search?<input type='text' placeholder='Search'
        
        style={{ flex: '0 1 auto', 
           
            backgroundColor: '#f0f0f0', // Set background color
            color: '#333',             // Set text color
            border: '1px solid black',  // Set border color
            padding: '10px',
            borderRadius: '1000px',
            width: '500px',     // Set height for the input
            fontSize: '16px',   // Adjust text size
  
    
         }}
        
        />:null}


        <div className='innav'
        style={{ display: 'flex', gap: '30px', marginRight:'20px'}}
        >
        <a onClick={searchfn}><SearchIcon/></a>

        <a onClick={viewfn}>{view?<DashboardIcon/>:<FormatListBulletedIcon/>}</a>

        <a onClick={modefn}>{mode?<LightModeIcon/>:<DarkModeIcon/>}</a>
        </div>
      </nav>
      {click && <CategoriesSidebar click={click} setClick={setClick} className="component" 
      
      />}
      

    </div>
  )
}