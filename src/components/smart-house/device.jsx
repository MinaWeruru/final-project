import EditButton from './edit-button'
import PowerButton from './power-button'
import DeleteButton from './remove-button'
import styles from './style.module.css' 

const Device = (props) => {
    return (
            <div  className={styles.list} key={props.id}>
             Device: {props.item.name}
       
             <EditButton id={props.item.id} showEditDialog={props.showEditDialog}></EditButton>
             <PowerButton id={props.item.id} item={props.item} handlePower={props.handlePower}></PowerButton>
             <DeleteButton handleRemove={props.handleRemove} id={props.item.id}></DeleteButton>
            </div>
    )
}

export default Device