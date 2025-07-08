import { Link, useOutletContext } from "react-router-dom"
import { useState } from "react";
import styles from './Home.module.css';
import { Outlet } from "react-router-dom";
export function Home()
{
    let [Activebtn,setActive]=useState("all");
    let data=useOutletContext();
    return <div className={styles.container}>
        <div className={styles.btns}>
            <Link to="all"><button className={`${styles.btn} ${Activebtn==="all" ? styles.active : ''}`} onClick={() =>setActive("all")}>All</button></Link>
            <Link to="men"><button className={`${styles.btn} ${Activebtn==="men" ? styles.active : ''}`} onClick={() =>setActive("men")}>Men</button></Link>
            <Link to="jewelery"><button className={`${styles.btn} ${Activebtn==="jewelery" ? styles.active : ''}`} onClick={() =>setActive("jewelery")}>Jewelery</button></Link>
            <Link to="electronics"><button className={`${styles.btn} ${Activebtn==="electronics" ? styles.active : ''}`} onClick={() =>setActive("electronics")}>Electronics</button></Link>
            <Link to="women"><button className={`${styles.btn} ${Activebtn==="women" ? styles.active : ''}`} onClick={() =>setActive("women")}>Women</button></Link>
        </div>
        <Outlet context={data}/>
    </div>
}