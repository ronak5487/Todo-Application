import React, { useState } from 'react'

const AddTodo = (props) => {
    
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
          
          e.preventDefault()
         if(!title || !desc){
             alert("Title or Description can not be blank")
         }
             else{
                props.addTodo(title,desc)
             }
         
        setTitle("");
        setDesc("");
    }
    
    
    
    return (
        
        <div>
            <h3 class='text-center my-4'>ADD YOUR TODO</h3>
            <form class="container" onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Add a todo</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>
                        
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">What you wants to do</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc"/>
                </div>
                
                <button type="submit" class="btn btn-success btn-sm">Add todo</button>
            </form>
        </div>
    )
}

export default AddTodo
