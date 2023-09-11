import { PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';


export function Sidebar(){
    return (
        <aside className={styles.sidebar}>

            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"  
            
            />

            <div className={styles.profile}>
                <Avatar src="https://scontent.fsjp11-1.fna.fbcdn.net/v/t39.30808-6/273608481_2166736720130764_6139303794303637538_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEeGcLP4RIJR6tj0dtUjDv4uIW_DWTYqqa4hb8NZNiqppBw8PjzKQbRqosPndvedq7byEyZEeszZAOBeu9jYgI6&_nc_ohc=VXcJlJ_DvAMAX_GfKZv&_nc_ht=scontent.fsjp11-1.fna&oh=00_AfAB4plzw66trD99kJjNlnLJu4sgX2wiOihLe-vODmkbgg&oe=64C638A6"/>


                <strong> Davi Rodrigues</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil</a>
            </footer>

        </aside>
    )
}