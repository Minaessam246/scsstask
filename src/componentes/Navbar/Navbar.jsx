import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.scss'
import Vegetarian from "./../Vegetarian/Vegetarian";

export default function Navbar() {
  let x=useNavigate()
  return (
    <>
{/* <Navbar> */}
<div className={styles.navbar}>
   <nav >
    <h1  > Learn ,cook,eat your food</h1>
    <div className="hidnav">
    <select id="choices" name="choices">
    <option ><Link  to="/">All</Link></option>
<option ><Link   to="/beef">Beef</Link></option>
<option ><Link  to="/breakfast">Breakfast</Link></option>
<option ><Link  to="/chicken">Chicken</Link></option>
<option ><Link to="/goat">Goat</Link></option>
<option ><Link to="/lamb">Lamb</Link></option>
<option  ><Link  to="/misc">Miscellaneous</Link></option>
<option ><Link to="/pasta">Pasta</Link></option>
<option ><Link to="/pork">Pork</Link></option>
<option ><Link to="/seafood">Seafood</Link></option>
<option ><Link to="/side">Side</Link></option>
<option ><Link to="/starter">Starter</Link></option>
<option ><Link to="/vegan">Vegan</Link></option>
<option ><Link to="/vegetarian">Vegetarian</Link></option>

<option ><NavLink to="/dessert">Dessert</NavLink></option>
       
        </select>
    </div>
<ul >
<li  ><NavLink activeClassName="active" to="/">All</NavLink></li>
<li ><NavLink activeClassName="active"  to="/beef">Beef</NavLink></li>
<li ><NavLink activeClassName="active" to="/breakfast">Breakfast</NavLink></li>
<li ><NavLink activeClassName="active" to="/chicken">Chicken</NavLink></li>
<li ><NavLink activeClassName="active"to="/goat">Goat</NavLink></li>
<li ><NavLink activeClassName="active"to="/lamb">Lamb</NavLink></li>
<li  ><NavLink activeClassName="active" to="/misc">Miscellaneous</NavLink></li>
<li ><NavLink activeClassName="active"to="/pasta">Pasta</NavLink></li>
<li ><NavLink activeClassName="active"to="/pork">Pork</NavLink></li>
<li ><NavLink activeClassName="active"to="/seafood">Seafood</NavLink></li>
<li ><NavLink activeClassName="active"to="/side">Side</NavLink></li>
<li ><NavLink activeClassName="active"to="/starter">Starter</NavLink></li>
<li ><NavLink activeClassName="active"to="/vegan">Vegan</NavLink></li>
<li ><NavLink activeClassName="active"to="/vegetarian">Vegetarian</NavLink></li>

<li ><NavLink activeClassName="active"to="/dessert">Dessert</NavLink></li>



</ul>


   </nav>
  </div>
  {/* </Navbar> */}
    </>
  )
}

