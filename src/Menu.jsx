import React from 'react'
import './index.css';
import {NavLink} from 'react-router-dom';
const Menu = () => {
  return (
    <>
    <div className='navbar'>
        <ul>
            <li>
               <NavLink activeClassName="link" to="/">About</NavLink>
               
            </li>
            <li>
                <NavLink activeClassName="link" to="/service">Service</NavLink>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Menu;