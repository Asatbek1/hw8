import styled from "styled-components"

const ToDoLi = styled.li`
display: flex;
justify-content:space-between;

`


function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <ToDoLi key={todo.id} >
            <div 
     
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            <div  onClick={() => removeTask(todo.id)}>
                X
            </div>
        </ToDoLi>
    )
}

export default ToDo