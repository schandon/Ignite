import logoToDoList from '../assets/Logo.png'
import styles from './Header.module.css';
import { PlusCircle } from "phosphor-react"

export default function Header(){
    return (
        <div className={styles.header}>
            <header>
                <img src={logoToDoList} />
            </header>
            <div className={styles.button}>
                {/* <input>
                
                </input> */}
                <footer>
                    <a href='#'>
                        Criar
                        <PlusCircle size={20} />
                    </a>
                </footer>
            </div>
        </div>
    );
}