import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react';



export function Post(author , publishedAt, content) {
    const [comments , setComments] = useState([
        'Post muito bacana, hein!?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR,})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        
        setComments(...comments, newCommentText);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatorio')
    }

    function deleteComment(comment) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}

                    </time>
                </div>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.comment}>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return <p key={line.comment}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu FeedBack</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um comentario'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commSentList}>
               {comments.map(comment => {
                return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
               })}

            </div>

        </article>
    )
}