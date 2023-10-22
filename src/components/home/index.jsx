import { useState } from 'react'
import styles from './style.module.css'
import {useLocalStorage} from '../../hook/useLocalStorage'

const Home = () => {
    const [user, setUser] = useLocalStorage('USER', "")
    const [inputValue, setInputValue] = useState('')

    return(
        <div className={styles.container}>
            {user && (
                <div>
                    <div className={styles.user}>Welcome, dear {user}</div>
                    <button  className={styles.btn} onClick={() => setUser('')}>Log Out</button>
                </div>
            )}
            {!user && (
                <div className={styles.user}>
                    <h1 className={styles.label}>Enter your name</h1>
                    <div></div>
                    <input value={inputValue} placeholder='Enter' onChange={(e) => setInputValue(e.target.value)}/>
                    <div></div>
                    <button onClick={() => setUser(inputValue)}  className={styles.btn}>Save</button>
                </div>
            )}
        </div> 
    )
}

export default Home