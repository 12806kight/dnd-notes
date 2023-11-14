import React, {useState} from "react";

function CreateNote(){
    const [notes, setNotes] = useState({
        title : "",
        content: ""
    })

    function handleChange(event){
        const {name , value} = event.target;
        setNotes(previousNotes =>{
            return {
                ...previousNotes,
                [name] : value
            }
        })
    }
    return(
    <div>
        <form>
            <input name="title" onChange={handleChange} value={notes.title}></input>
            <textarea name="content" onChange={handleChange} value={notes.content} rows="3"></textarea>
            <button>Add</button>
        </form>
    </div>
    );
}

export default CreateNote;