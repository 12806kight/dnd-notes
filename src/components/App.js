import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateNote from "./CreateNote"

function App(){

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(previousNote =>{
      return [...previousNote, newNote];
    })
  }

  return (
    <div>
    <Header/>
    <CreateNote onAdd={addNote}/>
    {notes.map((i, index) =>{
      return (
        <Note
        key={index}
        id={index}
        title={i.title}
        content={i.content}
        />
      )
    })}
    <Footer/>
    </div>
  );
}

export default App;