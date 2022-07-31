// import { format, formatDistanceToNow } from "date-fns";
// import  ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Commet';
import { Avatar } from './Avatar';

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(['Post muito bacana, hein?!']);    
    console.log(author)
    console.log(publishedAt)
    console.log(content)
    // const publishedDateFormatted = format('publishedAt', "d 'de' LLLL 'ás'  HH:mm'h'",)
    // const publisheDateRelativeNow = formatDistanceToNow(publishedAt,
    //     {
    //         locale: ptBR,
    //         addSuffix: true,
    //     })
	
    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment() {
        event.preventDefault();


        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }
    
    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
        
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comments => {
            return comments !== commentToDelete;
        }) 
        setComments(commentsWithoutDeleteOne);   
    }
    
    const isNewCommentEmpty = newCommentText.length === 0;

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
                <time title={'2022-06-05 08:50:43'} dataTime={'2022-06-05 08:50:43'}>
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
            <form onSubmit={handleCreateNewComment}className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe seu Comentário'
                    value={newCommentText}
                    onInvalid= { handleNewCommentInvalid}
                    onChange={handleNewCommentChange}
                    disabled={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment} />
                    )
                })}
            </div>
        </article>
    );
}