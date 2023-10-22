import { useState } from 'react'
import { useLocalStorage } from '../../hook/useLocalStorage'
import ChatBlock from './Chat-block'
import Comment from './Comment'
import styles from './style.module.css'

const Chat = () => {
 
const [chatData, setChatData] = useLocalStorage('CHAT', []);
const [inputValue, setInputValue] = useState('')
const [user] = useLocalStorage('USER');

const sendMessage = () => {
    setChatData([...chatData, `${user ? user: "Anonym"}: ${inputValue}`]);
    setInputValue ("");
    }

    return(
        <div className={styles.container}>
            <ChatBlock chatData={chatData}></ChatBlock>
            <Comment 
            inputValue={inputValue}
            setInputValue={setInputValue}
            sendMessage={sendMessage} 
            setChatData={setChatData}
            ></Comment>
        </div>
    )
}

export default Chat