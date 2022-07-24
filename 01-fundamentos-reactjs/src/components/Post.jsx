import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Commet';
import { Avatar } from './Avatar';

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás'  HH:mm'h'", {locale: ptBR,})
    const publisheDateRelativeNow = formatDistanceToNow(publishedAt,
        {
            locale: ptBR,
            addSuffix: true,
        })
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src={ author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>

                    </div>                    
                </div>
                <time title={publishedDateFormatted} dataTime={publishedAt.toISOString()}>
                
                    {publisheDateRelativeNow}
                
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href='#'>{ line.content}</a></p>
                    }
                })}
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