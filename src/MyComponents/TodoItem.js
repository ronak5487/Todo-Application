import React from 'react'

const TodoItem = ({tot,ondelete}) => {
  return (
    <div>
      <h4>{tot.title}</h4>
      <p>{tot.desc}</p>
      <button type="button" class="btn btn-sm btn-danger" onClick={()=>ondelete(tot)}>Delete</button>
    </div>
  )
}

export default TodoItem
