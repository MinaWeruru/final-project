import styles from './style.module.css'
import {Switch, Route} from 'react-router-dom'
import Home from '../home'
import Chat from '../chat'
import TestApi from '../test-api'
import MyPage from '../my-page'
import SmartHouse from '../smart-house'

const Main = () => {
    return(
        <div className={styles.container}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/chat' component={Chat}/>
                <Route exact path='/test' component={TestApi}/>
                <Route path='/mypage' component={MyPage}/>
                <Route path='/smart' component={SmartHouse}/>
            </Switch>
        </div>
    )
}

export default Main