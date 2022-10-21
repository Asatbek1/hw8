import { useState } from 'react'
import styled from 'styled-components'
const HandleForm = styled.form`
background-color:rgb(124, 0, 0);
width: 255px;
padding: 6px;
border-radius: 10px;
`
function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
        <HandleForm onSubmit={handleSubmit}>
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значение..."
            />        
            <button>Сохранить</button>
        </HandleForm>
    )
}

export default ToDoForm