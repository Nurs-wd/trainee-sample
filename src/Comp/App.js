import React, { useEffect, useState } from 'react';
import Main from './Main'
import Notes from './Notes' 
import Tags from './Tags'


function App(){
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([])
  const [tags, setTag] = useState([])
  const [json, setJson] = useState(null)
  // useEffect(() => {
    
  //   const jsonString = JSON.stringify(json)
  //   fs.writeFile('./Data.json', jsonString, err => {
  //   if (err) {
  //       console.log('Error writing file', err)
  //   } else {
  //       console.log('Successfully wrote file')
  //   }
  //   })
  // }, [notes])
  const filterByTags = (e) => {
    e.preventDefault()
    let arr = notes.filter((note) => {
      let array = [];

      let val = note.text.split(" ");
      for (let i = 0; i < val.length; i++) {
            if (val[i].charAt(0) === "#") {
                array.push(val[i]);
            }
      }

      for (let i = 0; i < array.length; i++) {
      if (e.target[0].value === array[i]) {
          return true;
        }
      }
      
    })
    let result = ''
    for (var i = 0; i < arr.length; i++) {
      result += `<div className='SearchRes'>Note with id ${arr[i].id}  :  ${arr[i].text} </div><br>`
    }
    document.getElementById('searchRes').innerHTML = result
  }

    return (
      <div>
        <Main
          json={json}
          setJson={setJson}
          tags={tags}
          setTag={setTag}
          text={text}
          setText={setText}
          setNotes={setNotes}
          notes={notes} />
        <div className="list">
        <Notes
          text={text}
          setText={setText}
          setNotes={setNotes}
          notes={notes} />
        <h3>Tags:</h3>
        <Tags 
          tags={tags}
          setTag={setTag}
          />
        </div>
        <h3>Filter by tags:</h3>
        <form onSubmit={filterByTags}>
              <input type="text" placeholder="Start with symbol '#'"/>
              <button type="submit" >Search</button>
        </form>
        <ul id="searchRes">

        </ul>
      </div>
    )
}

export default App;
