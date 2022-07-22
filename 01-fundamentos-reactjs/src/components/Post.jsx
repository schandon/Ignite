import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Commet';
import { Avatar } from './Avatar';

import styles from './Post.module.css'

export function Post({author, publishedAt}) {
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás'  HH:mm'h'", {locale: ptBR,})
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={ author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>

                    </div>                    
                </div>
                <time
                    title="17 de Julho ás  02:07"
                    dataTime='2022-07-17 02:07:45'
                >
                publishedDateFormatted
                </time>
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