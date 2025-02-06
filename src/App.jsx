import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./componentes/Layout/Layout";
import All from "./componentes/All/All";
import Beef from "./componentes/Beef/Beef";
import Chicken from "./componentes/Chicken/Chicken";
import Goat from "./componentes/Goat/Goat";
import Lamb from "./componentes/Lamb/Lamb";
import Miscellaneous from "./componentes/Miscellaneous/Miscellaneous";
import Pasta from "./componentes/pasta/pasta";
import Pork from "./componentes/Pork/Pork";
import Seafood from "./componentes/Seafood/Seafood";
import Side from "./componentes/Side/Side";
import Starter from "./componentes/Starter/Starter";
import Vegan from "./componentes/Vegan/Vegan";
import Vegetarian from "./componentes/Vegetarian/Vegetarian";
import Breakfast from "./componentes/Breakfast/Breakfast";
import Dessert from "./componentes/Dessert/Dessert";
import Details from './componentes/Details/Details';
function App() {
  const [count, setCount] = useState(0)
let x= createBrowserRouter([{path:"",element:<Layout/>,children:[
  {path:"",element:<All/>},
  {path:"beef",element:<Beef/>},
  {path:"chicken",element:<Chicken/>},
  {path:"goat",element:<Goat/>},
  {path:"lamb",element:<Lamb/>},
  {path:"misc",element:<Miscellaneous/>},
  {path:"pasta",element:<Pasta/>},
  {path:"pork",element:<Pork/>},
  {path:"seafood",element:<Seafood/>},
  {path:"side",element:<Side/>},
  {path:"starter",element:<Starter/>},
  {path:"vegan",element:<Vegan/>},
  {path:"vegetarian",element:<Vegetarian/>},
  {path:"breakfast",element:<Breakfast/>},
  {path:"dessert",element:<Dessert/>},
  {path:"beef/:id",element:<Details/>},
  {path:"chicken/:id",element:<Details/>},
  {path:"goat/:id",element:<Details/>},
  {path:"lamb/:id",element:<Details/>},
  {path:"misc/:id",element:<Details/>},
  {path:"pasta/:id",element:<Details/>},
  {path:"pork/:id",element:<Details/>},
  {path:"side/:id",element:<Details/>},
  {path:"starter/:id",element:<Details/>},
  {path:"vegan/:id",element:<Details/>},
  {path:"vegetarian/:id",element:<Details/>},
  {path:"breakfast/:id",element:<Details/>},
  {path:"dessert/:id",element:<Details/>},
  {path:"/:id",element:<Details/>},
 
]




}])
  return (
    <>
    <RouterProvider router={x}>

      
    </RouterProvider>
   
    </>
  )
}

export default App
