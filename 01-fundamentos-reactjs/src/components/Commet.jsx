import styles from './Commet.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
export function Comment(){
    return (
        <div className={styles.comment}>
        <img src="https://github.com/schandon.png" alt="" />
        
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alexandre Souza</strong>
                            <time title="17 de Julho ás  02:07" dataTime='2022-07-17 02:07:45'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>Muito bom Gabiru Alado, meus parabéns!! 🚀</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>   
        </div>
        </div>
    );
}