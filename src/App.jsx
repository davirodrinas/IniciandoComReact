import {Post} from "./components/Post"
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    authorUrl: {
      avatarUrl: 'https://github.com/diegop3.png',
      name: 'Davi Rodrigues',
      role: 'CTO @ CarpintariaCity'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content:' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'}
    ],        
     publishedAt: new Date('2023-07-28 20:00:00'),  
  },
  {
    id: 2,
    authorUrl: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1277597037278699520/jLF9PnOE_400x400.jpg',
      name: 'Gui maia',
      role: 'DEV @ CarpintariaCity'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content:' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'}
    ],        
     publishedAt: new Date('2023-07-30 20:00:00'),  
  },
];


export function App() {

  return (
    <div>
      <Header/>

     <div className={styles.wrapper}>
        <Sidebar />
        <main>
           {posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
           })}
        </main>

     </div>
    </div>
  )
}


