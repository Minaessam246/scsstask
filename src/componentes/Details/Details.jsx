import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import  styles  from './Details.module.scss';
import axios from 'axios';

export default function Details() {
 let {id} =useParams();
 console.log(id);
 const [product, setproduct] = useState([])
 function getdetails(){
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res)=>{setproduct(res.data.meals[0]);
  console.log(res.data.meals[0])}
  

  )
 }
 useEffect(() => {
   getdetails()
 

  
 }, [])
 
  return (
   <>
  
   <div className={styles.Details}>
    <h1>{product.strMeal}</h1>
    
   
   <div className={styles.flexitems}><div className={styles.sec1}>
    <img src={product.strMealThumb} alt="Spicy Arrabiata Penne" className="meal-image"/>
    <div className="buts"><button>Youtube</button>
    <button>Source</button></div>
    </div>
    <p className="meal-description">
    {product.strInstructions}
    </p>
    
    <div className={styles.sec3}>
    <h2>Ingredients</h2>
   <hr />
     
       
        
        <div className={styles.item3}>
          <h3>{product.strIngredient1}</h3>
          <h3>{product.strMeasure1}</h3>
     </div> 
           <div className={styles.item3}>

          <h3>{product.strIngredient2}</h3>
          <h3>{product.strMeasure2}</h3></div>
       <div className={styles.item3}>
          <h3>{product.strIngredient3}</h3>
          <h3>{product.strMeasure3}</h3></div>
          { product.strIngredient4?
        <div className={styles.item3}>

          <h3>{product?.strIngredient4}</h3>
          <h3>{product?.strMeasure4}</h3>
        </div>:null}
    { product.strIngredient5?
        <div className={styles.item3}>

          <h3>{product?.strIngredient5}</h3>
          <h3>{product?.strMeasure5}</h3>
        </div>:null}
          { product.strIngredient6?
        <div className={styles.item3}>

          <h3>{product?.strIngredient6}</h3>
          <h3>{product?.strMeasure6}</h3>
        </div>:null}
      { product.strIngredient7?
        <div className={styles.item3}>

          <h3>{product?.strIngredient7}</h3>
          <h3>{product?.strMeasure7}</h3>
        </div>:null}
        { product.strIngredient8?
        <div className={styles.item3}>

          <h3>{product?.strIngredient8}</h3>
          <h3>{product?.strMeasure8}</h3>
        </div>:null}
       { product.strIngredient9?
        <div className={styles.item3}>

          <h3>{product?.strIngredient9}</h3>
          <h3>{product?.strMeasure9}</h3>
        </div>:null}
      
    </div>
  </div>
    </div>
   </> 
  )
}
