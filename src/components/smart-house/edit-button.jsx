const EditButton = (props) => {
    return (
    <button onClick={()  => props.showEditDialog(props.id)}>Rename</button>     
)}

export default EditButton