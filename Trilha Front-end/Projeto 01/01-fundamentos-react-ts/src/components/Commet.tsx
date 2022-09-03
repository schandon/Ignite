import styles from './Commet.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react';

interface CommentsProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }:CommentsProps) {
    
    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment() {
        console.log("Deletar");
        onDeleteComment(content);
    }

    function handleLikeCount(){
        setLikeCount((state) => {
            return state + 1;
        });
    }
    return (
        <div className={styles.comment}>
        <img src="https://github.com/schandon.png" alt="" />
        
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alexandre Souza</strong>
                            <time title="17 de Julho ás  02:07" dateTime='2022-07-17 02:07:45'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={ handleDeleteComment } title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>{ content }</p>
            </div>

            <footer>
                <button onClick={handleLikeCount}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>   
        </div>
        </div>
    );
}