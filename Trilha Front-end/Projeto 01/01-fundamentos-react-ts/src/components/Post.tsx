import { format, formatDistanceToNow } from "date-fns";
import  ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Commet';
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}
export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState(['Post muito bacana, hein?!']);    
    console.log(author)
    console.log(publishedAt)
    console.log(content)
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás'  HH:mm'h'",{
		locale: ptBR,
		}
	);
    const publisheDateRelativeNow = formatDistanceToNow(publishedAt,
         {
             locale: ptBR,
            addSuffix: true,
        });
	
    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();


        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }
    
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
        
    }

    function deleteComment(commentToDelete: string) {
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
                <time title={publishedDateFormatted} dateTime={'2022-06-05 08:50:43'}>
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
            <form onSubmit={handleCreateNewComment}className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe seu Comentário'
                    value={newCommentText}
                    onInvalid= { handleNewCommentInvalid}
                    onChange={handleNewCommentChange}
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