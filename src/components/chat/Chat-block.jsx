import styles from './style.module.css'

const ChatBlock = (props) => {
    return(
        <div className={styles.blog}>
            <h1>Chat!</h1>
            {props.chatData.map((el, i) => {
                return(
                    <div key={i}>
                        {el}
                    </div>
                );
            })}
        </div>
    )
}

export default ChatBlock