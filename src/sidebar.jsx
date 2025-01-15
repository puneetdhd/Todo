import DensityMediumIcon from '@mui/icons-material/DensityMedium';
// import CategoriesSidebar from './sidebar';
import { useState } from 'react';

export default function sidebar(){
    let [click,setClick]=useState('');
    const triggerFn=()=>{
        setClick((prev)=>!prev); //toggle State
    }
    return(
        <>
        <div className='container'>
        <a onClick={triggerfn}><DensityMediumIcon/></a>

        </div>
        </>
    )
}
