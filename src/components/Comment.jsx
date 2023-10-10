import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0)


    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function HandleLikeComment() {
        setLikeCount(likeCount + 1)
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://scontent.fsjp11-1.fna.fbcdn.net/v/t39.30808-6/273608481_2166736720130764_6139303794303637538_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEeGcLP4RIJR6tj0dtUjDv4uIW_DWTYqqa4hb8NZNiqppBw8PjzKQbRqosPndvedq7byEyZEeszZAOBeu9jYgI6&_nc_ohc=VXcJlJ_DvAMAX_GfKZv&_nc_ht=scontent.fsjp11-1.fna&oh=00_AfAB4plzw66trD99kJjNlnLJu4sgX2wiOihLe-vODmkbgg&oe=64C638A6" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Davi Rodrigues</strong>
                            <time title='28 de julho ás 8:15' dateTime='2023-07-28'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}  title='Deletar Comentario'> 
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={HandleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}