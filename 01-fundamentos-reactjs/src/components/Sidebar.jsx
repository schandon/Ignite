import styles from "./Sidebar.module.css"
// import { } from "react-icons";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                classeName={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            
            <div className={styles.profile}>
                <strong>Alexandre Souza</strong>
                <p>Web Developer</p>
            </div>
            
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}