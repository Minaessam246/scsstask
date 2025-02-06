import React, { useEffect, useState } from 'react'

import styles from './pasta.module.scss';
import axios, { Axios } from 'axios';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function All() {
  const [allpro, setallpro] = useState([]);
function getproducts(){
  
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta`)
  .then((res) => setallpro(res.data.meals) 
   
  )
  .catch((err) => console.error(err));



 

} useEffect(() => {
  getproducts()

 
}, [])


  return (
    <>
    <Navbar/>
   <div className={styles.pasta}>

      <ul>
        {allpro.map((meal) => (
          <li key={meal.idMeal}>
            
            <img src={meal.strMealThumb}  alt={meal.strMeal} />
            <h3>{meal.strMeal.split(' ').slice(0, 2).join(' ')}</h3>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  )
}
