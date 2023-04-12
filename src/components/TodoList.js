import React, { useLayoutEffect } from 'react'

const Todo=[
    {name:"sleeping",isDone:true},
    {name:"eating",isDone:false},
    {name:"reading",isDone:true},
    {name:"playing",isDone:false}
]

const TodoList = () => {
  return (
    <div>
{
    
    <ul>
        {
            Todo.map((todo)=>{
                return <li> {todo.name} </li> 
            })
        }
    </ul>
}
    </div>
  )
}

export default TodoList