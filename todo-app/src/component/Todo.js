import React, {useState} from 'react';

const Todo = ({todo, todos, setTodos}) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((item)=> item.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        }));
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;


