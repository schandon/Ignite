import logoToDoList from '../assets/Logo.png'
import stylesHeader from './Header.module.css';
import stylesForm from './Form.module.css';
import { PlusCircle } from "phosphor-react"

export default function Header(){
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
                    <input placeholder='Adicione uma tarefa nova' />
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