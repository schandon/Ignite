import styles from './Header.module.css'
import igniteLogo from '../assets/Ignite-logo.svg'
export function Hearder() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo}/>
            <strong>Ignite Feed</strong>
        </header>
        
        
    );
}