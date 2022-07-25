import { format, formatDistanceToNow } from 'date-fns';
import  ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Commet';
import { Avatar } from './Avatar';

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([1, 2]);    
    console.log(author)
    console.log(publishedAt)
    console.log(content)
    // const publishedDateFormatted = format('publishedAt', "d 'de' LLLL 'ás'  HH:mm'h'",)
    // const publisheDateRelativeNow = formatDistanceToNow(publishedAt,
    //     {
    //         locale: ptBR,
    //         addSuffix: true,
    //     })
		
    function handleCreateNemComment() {
        event.preventDefault();
        setComments([...comments, comments.length + 1])
    }

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
                <time title={publishedAt} dataTime={publishedAt}>
                    sorry
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
            <form onSubmit={handleCreateNemComment}className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    placeholder='Deixe seu Comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment/>
                    )
                })}
            </div>
        </article>
    );
}