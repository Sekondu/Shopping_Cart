import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.module.css'
import styles from './App.module.css';
import icon from './shop_icon.svg'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function App() {
let [data,setData]=useState(null);
let [Activebtn,setActive]=useState("home");
let [totProducts,addProducts]=useState([]);
function addProduct(prod)
{
  let added=false;
  totProducts.map(products => {
    if(products==prod)
      {
        added=true;
      }
  })
  if(!added)
  {
    addProducts([...totProducts,prod]);
  }
}
let navigate=useNavigate();
  useEffect(() => {
        const fetchData=async () => {
           let result=await fetch('https://fakestoreapi.com/products/');
            let products=await result.json();
            setData(products);
        }
        fetchData();
        navigate("home/all",{replace:true});
    },[])
return (
    <>
     <div className={styles.nav}>
      <h1 className={styles.h1}><img src={icon} alt="" className={styles.icon} /> Store</h1>
      <div className={styles.links}>
    <Link to="home"><button className={`${styles.btn} ${Activebtn==="home" ? styles.clicked : ''}`} onClick={() => {setActive("home")}}>Home</button></Link>
    <Link to="cart" state={totProducts}><button className={`${styles.btn} ${Activebtn==="cart" ? styles.clicked : ''}`} onClick={() => {setActive("cart")}}>Cart</button></Link>
    </div>
     </div>
     <Outlet context={{data,addProduct}}/>
    </>
  )
    }

export default App
