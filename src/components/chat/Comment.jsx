import styles from './style.module.css'

const Comment = (props) => {
    return(
        <div className={styles.wrapper}>
            <h2>
                Write your comment
            </h2>
            <input type="text" placeholder="Write your comment" 
            value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)}></input>
            <button className={styles.btn} onClick={props.sendMessage}>Send</button>
            <button className={styles.btn} onClick={() => props.setChatData([])}>Clean</button>
        </div>
    )
}

export default Comment