import React from 'react'
import Note from './Note'

const Notes = (props) => {


    return (
            <ul>
                {props.notes.length > 0 ? props.notes.map((note, index) => (<Note
                    index={index}
                    note={note}
                    text={props.text}
                    setText={props.setText}
                      setNotes={props.setNotes}
                      notes={props.notes} />)):null}
                
            </ul>
    )
}

export default Notes