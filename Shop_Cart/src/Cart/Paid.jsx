import { useState,useEffect } from 'react';
import styles from './Paid.module.css'
import img from './success.svg'
export function Paid({setting,Disable})
{
    let [turned,setTurned]=useState(false);
    
    useEffect(() => {
     setTimeout(() => setTurned(true),2000);
    },[])
    return <div className={styles.back}>    
    {turned?<Success />:''}
    </div>
}
function Success()
{
    return <div className={styles.paid}>
        <img className={styles.img} src={img} alt="" /> 
        <p>Paid Successfuly!</p>
        </div>
}