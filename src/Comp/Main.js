import React from 'react'

const Main = (props) => {
    
    const textHandler = e => {
        props.setText(e.target.value)

    }
    const submitter = e => {
        e.preventDefault()
        props.setNotes([...props.notes, { text: props.text, id: Math.floor(Math.random() * 100) }])
        props.setText("")
        let val = props.text.split(" ");
            for (let i = 0; i < val.length; i++) {
                 if (val[i].charAt(0) === "#") {
                  let array = [];
                     array.push(val[i]);
                     array = array.concat(props.tags)
                     props.setTag(array)
                 }
        }
        let Json = {
            notes: props.notes,
            tags: props.tags
        }
        props.setJson(JSON.stringify(Json))
        console.log(props)
    }
    return (
        <div>
            <form onSubmit={submitter}>
                <input type="text" onChange={textHandler} value={props.text}/>
                <button type="submit" >Add</button>
            </form>
        </div>
    );
}

export default Main