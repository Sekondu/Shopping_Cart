import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import styles from './Cart.module.css'
import { Paid } from "./Paid";
export function Cart()
{
    let location=useLocation();
    let [cartProds,setCartProds]=useState([]);
    let [totPrice,setTotPrice]=useState(0);
    let [pay,setPay]=useState(false);
    let [disabled,setdisabled]=useState(false);
    function Disable()
    {
       setdisabled(!disabled);
       setPay(true);
    }

    function Pay()
    {
        setPay(!pay);
    }
    function setQuantity(nam,quantity)
    {
        if(quantity<1)
        {
            quantity=1;
        }
        setCartProds(cartProds.map(product => {
        return product.name===nam ? {...product,quantity:Number(quantity)}:product;
        }))
    }
    function Remove(title)
    {
        setCartProds(cartProds.filter(product => product.name!==title));
    }

    useEffect(() => {
        let timer;
        if(cartProds)
        {
        timer=setTimeout(() => {setPay(false);setdisabled(false)},6000);
        }

        return () => clearTimeout(timer);
    },[pay])

    useEffect(() => {
        let total=0;
        total=cartProds.reduce((acc,product) => acc+((Number(product.price)*Number(product.quantity>=1 ? product.quantity : 1))),0)
        setTotPrice(total.toFixed(2));
    },[cartProds])

    useEffect(() => {
        let newCart=[];
    if(cartProds.length>=1)
    {
        let obj={
            name:location.state[location.state.length-1].title,
            image:location.state[location.state.length-1].image,
            price:location.state[location.state.length-1].price,
            quantity:1,
        }
        setCartProds([...cartProds,obj]);
        console.log(obj);
    }
    else if(location.state && Array.isArray(location.state))
    {
        location.state.map(product => {
            let obj={
                name:product.title,
                image:product.image,
                price:product.price,
                quantity:1,
            }
            newCart.push(obj);
        })
        setCartProds(newCart);
    }
    },[location.state])

    if(!location.state) return <h1>No Items</h1>
    return <div className={styles.container}>
        {cartProds.map(products => {
        return <div>
                <div className={styles.left}>
                    <img src={products.image} alt="" />
                    <p>{products.name}</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.btns}>
                        <button disabled={disabled} onClick={() => setQuantity(products.name,products.quantity-1)}>-</button>
                        <input className={styles.input} type="number" value={products.quantity} onChange={(e) => setQuantity(products.name,e.target.value)}/>
                        <button disabled={disabled} onClick={() => setQuantity(products.name,products.quantity+1)}>+</button>
                    </div>
                    <p>{(Number(products.price)*Number(products.quantity)).toFixed(2)}$</p>
                    <button disabled={disabled} className={styles.remove} onClick={() => Remove(products.name)}>Remove</button>
                </div>
            </div>
        })}
        <div className={styles.totalLeft}>
            <h2>SubTotal</h2>
            <div className={styles.totalRight}>
                <p>Total: {totPrice}$</p>
                <button disabled={disabled} className={styles.checkout} onClick={() => {if(cartProds.length>0){Pay();Disable();}}}>Proceed to Checkout</button>
            </div>
                {pay===true ? <Paid setting={setPay} Disable={Disable}/> : ''}
        </div>
    </div>
}