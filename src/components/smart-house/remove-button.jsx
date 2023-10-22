import styles from './style.module.css' 

const DeleteButton = (props) => {
    return (
        <button className={styles.btn} onClick={() => props.handleRemove(props.id)}>Remove</button>
    )
}
export default DeleteButton