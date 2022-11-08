import React from 'react';
import {Link} from 'react-router-dom';



const DropMenu = ({focus, setFocus}) => {

return (
<section className={focus?'dropmenu dropmenu-active': 'dropmenu dropmenu-closed'} >
<div className="dropContent">
        <Link to='#'>
        <h2 className="dropTitle">
            sjgfkdjgdk
        </h2>
        </Link>
        <p className="dropText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <ul className="dropList">
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
        </ul>
    
</div>
<div className="dropContent">
        <Link to='#'>
        <h2 className="dropTitle">
            sjgfkdjgdk
        </h2>
        </Link>
        <p className="dropText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <ul className="dropList">
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
        </ul>
    
</div>
<div className="dropContent">
        <Link to='#'>
        <h2 className="dropTitle">
            sjgfkdjgdk
        </h2>
        </Link>
        <p className="dropText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <ul className="dropList">
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
        </ul>
    
</div>
<div className="dropContent">
        <Link to='#'>
        <h2 className="dropTitle">
            sjgfkdjgdk
        </h2>
        </Link>
        <p className="dropText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <ul className="dropList">
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
            <Link to ='#'>    
               <li className="dropItem">
                sfsf
               </li>
            </Link>
        </ul>
    
</div>

    </section>
)
}
export default DropMenu;

