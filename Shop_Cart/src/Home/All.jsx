import { useOutletContext } from 'react-router-dom';
import styles from './All.module.css'
import { useState } from 'react';
export function All()
{
  let [filtering,setFilter]=useState('');
  
    let {data,addProduct}=useOutletContext();
    if(!data) return <div className={styles.loading}>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
    </div>
    let filteredData;
  if(filtering)
  {
    filteredData=data.filter(product =>product.title.toLowerCase().includes(filtering.toLowerCase())?product:null);
  }
  else{
    filteredData=data;
  }

    return <div className={styles.all}>
      <div className={styles.searchDiv}>
        <label className={styles.label} htmlFor="Search">Search</label>
        <input type="text" className={styles.search} placeholder='eg. Coat' onChange={(e) => setFilter(e.target.value)}/>
      </div>
      <div className={styles.all2}>
    {filteredData.map(product=> {
      return  <div key={product.title} className={styles.container}>
        <div className={styles.first}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
        </div>
        <div className={styles.second}>
            <p>{product.price}$</p>
            <p className={styles.category}>{product.category}</p>
        </div>
        <div className={styles.third}>
            <button className={styles.btn} onClick={() => addProduct(product)}>Add to Cart</button>
        </div>
      </div>  
    })}
    </div>
    </div>
 }