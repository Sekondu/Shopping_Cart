import { Link } from "react-router-dom"
import styles from './NotFound.module.css'
import App from "../App/App"
export function NotFound()
{
    return <h1 className={styles.body}>
        Oops, This Page is unavailable!
        <Link><button className={styles.btn}>Home</button></Link>
    </h1>
}