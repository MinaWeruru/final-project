import styles from './style.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
            <Link to='/'>Main Page</Link>
            <Link to='/chat'>Chat</Link>
            <Link to='/test'>Data Load</Link>
            <Link to='/mypage'>My Page</Link>
            <Link to='/smart'>Smart House</Link>
            </nav>
        </div>
    )
}

export default Header