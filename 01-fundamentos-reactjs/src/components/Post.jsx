import { Comment } from './Commet';
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/schandon.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Alexandre Souza</strong>
                        <span>Web Developer</span>

                    </div>                    
                </div>
                <time title="17 de Julho ás  02:07" dataTime='2022-07-17 02:07:45'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Coe mané, ai é pika</p>
                <p>
                    <a href=''>#LiveDoCasé</a>{' '}
                    <a href=''>#SimplismenteIncrivel</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    placeholder='Deixe seu Comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}