import React, { useState } from 'react'
import image from "../../assets/png-clipart-fruit-logo-food-recipe-business-seasoning-ingredients-natural-foods-dried-fruit-thumbnail.png"
import styles from './Sidenav.module.scss';
import { Link } from 'react-router-dom';

export default function Sidenav() {
  const [tog, settog] = useState(true);
  function toggle(){
    settog(!tog)
  }
  return (
    <>

   

    <div onClick={toggle} className={styles.sidenav}>
       <div className={styles.togbtn}><i class="fa-solid fa-bars"></i></div> 
  <nav className={tog?styles.hidden:styles.block}>
        

    <img src={image} alt="" />
    <Link to="/">Meals</Link>
    <Link to="/">Ingredients</Link>
    <Link to="/">Area</Link>
  </nav>
    </div>
  
    </>
  )
}
