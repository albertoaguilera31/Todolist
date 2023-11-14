import React from "react";
import './TodoForm.css';

function TodoForm(){
    return(
        <form>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Añade tu tarea a realizar"></textarea>
            <div className="TodoForm-buttonContainer">
            <button
            className="TodoForm-button
            TodoForm-button--cancel"
            >Cancelar</button>
            <button
            className="TodoForm-button
            TodoForm-button--add"
            >Añadir</button>
            </div>
            
        </form>
    );
}

export {TodoForm};