import styled from "styled-components"

const ToDoLi = styled.li`
display: flex;
justify-content:space-between;

`


function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <ToDoLi key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
        </ToDoLi>
    )
}

export default ToDo