import { ChangeEvent, useState } from 'react';
import logoToDoList from '../assets/Logo.png'
import stylesHeader from './Header.module.css';
import stylesForm from './Form.module.css';
import { PlusCircle } from "phosphor-react"

export default function Header(){
    const [task, setTask] = useState(['']);
    const [newTask, setNewTask] = useState('');
    
    function handleNewTask(event:ChangeEvent<HTMLInputElement>) {
        event.preventDefault();

        setTask([...task, newTask]);
        setNewTask(event.target.value)
    }
    
    return (
        <>
            <div className={stylesHeader.header}>
            <header>
                <h1>
                    <img src={logoToDoList} />
                </h1>
            </header>
            </div>
            <div className={stylesForm.entrada}>
                <form>
                    <input
                        name='input'
                        placeholder='Adicione uma tarefa nova'
                        onChange={handleNewTask}
                        value={newTask}
                    />
                    <footer>
                        <a href='#'>
                            Criar
                            <PlusCircle size={20} />
                        </a>
                    </footer>
                </form>
            </div>
        </>
        
    );
}