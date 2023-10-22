import styles from './style.module.css' 

const PowerButton = (props) => {
    return (
      <button
      className={styles.btn}  
      style={props.item.power ? { background: "red"} : { background: "green"} } 
      onClick={() => props.handlePower(props.item.id)}>{props.item.power ? "Turn Off" : "Turn On"}</button>
    )
}

export default PowerButton
