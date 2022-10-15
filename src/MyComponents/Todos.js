import React from 'react'
import TodoItem from "../MyComponents/TodoItem";

const Todos = (props) => {
  let mystyle={
    minHeight: "35vh"
  }
  return (
    <div className="container my-3" style={mystyle} >
      <h3 className="text-center my-4">TODOS LIST</h3>
      {props.tod.length===0? "No todos to display":
      props.tod.map((too)=>{
        return (
        <div class="text-center">
        <h4>{too.title}</h4>
        <p>{too.desc}</p>
        <button type="button" class="btn btn-sm btn-danger" onClick={()=>props.k(too)}>Delete</button>
        <hr/>
        </div>
        )
      })
      }
     
    </div>
  )
}

export default Todos
