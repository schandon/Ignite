import logoToDoList from '../assets/Logo.png'
import styles from './Header.module.css';

export default function Header(){
    return (
        <header className={styles.header}>
            <img src={logoToDoList} />
        </header>
    );
}