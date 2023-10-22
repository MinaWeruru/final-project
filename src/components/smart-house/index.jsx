import { useState } from "react"
import styles from './style.module.css' 
import Device from "./device";

const SmartHouse = () => {

    const [device, setDevice] = useState([
        {
        id: 1, 
        name: 'Fridge',
        power: false,
        isEdited: false,
    },
    {
        id: 2, 
        name: 'TV',
        power: false,
        isEdited: false,
    },
    {
        id: 3, 
        name: 'Lamp',
        power: false,
        isEdited: false,
    },

]);

const [addValue, setAddValue] = useState('');
const [editValue, setEditValue] = useState('');

//добавление строки
const handleAdd = () => {
    setDevice([...device, {id: Date.now(), name: addValue, power: false, isEdited: false}])
    setAddValue('')
}

//удаление строки
const handleRemove = (deviceId) => {
  setDevice(() => device.filter(el => el.id !== deviceId))
}

//Переключатель
const handlePower = (deviceId) => {
setDevice(() => device.map(el => {
    if(el.id === deviceId){
        return {...el, power: !el.power}
    }
    return el;
}))
}

//редактирование

const showEditDialog = (deviceId) => {
  setDevice (() => device.map(el => {
    if(el.id === deviceId) {
       return {...el, isEdited: true};
    }
    return el;
  })
  )
}

const handleEdit = (deviceId) => {
    setDevice(() => device.map(el => {
        if(el.id === deviceId) {
            return {...el, name: editValue, isEdited: false}
        }
        return el;
    })
    )
    setEditValue("");
}
    return (
    <div className={styles.text}>
        <h2>Smart House's devices</h2>
        
        <input value={addValue} onChange={(e) => setAddValue(e.target.value)}></input>

        <button onClick={handleAdd}>Add device</button>
        
        <div>
            {device.map((item) => {
         return (
             <div>
                 {!item.isEdited ? (
                     <Device item={item} showEditDialog={showEditDialog} handleRemove={handleRemove} handlePower={handlePower} handleAdd={handleAdd} handleEdit={handleEdit}></Device>
                ) : <div className= {styles.edit}>
                       <input className={styles.input} value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
                       <button onClick={() => handleEdit(item.id)}>Save</button>
                    </div>
                 }
            </div>
                        );
            })}
        </div>        
    </div>
    );
}

export default SmartHouse











