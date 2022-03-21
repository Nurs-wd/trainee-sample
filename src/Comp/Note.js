import React from 'react'

const Note = (props) => {
    const deleteHandler = () => {
        props.setNotes(props.notes.filter((el) => el.id !== props.note.id))
    }
    const editHandler = () => {
        props.notes.filter((el) => el.id === props.note.id)
            .map((el) =>  el.text = props.text)
        props.setText("")
    }


    
    return (
        <div key={props.note.id} className='card'> 
            <li>
                {props.note.text}
            </li>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )

}
export default Note 