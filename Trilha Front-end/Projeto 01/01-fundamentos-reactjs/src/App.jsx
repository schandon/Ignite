import { Hearder } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/schandon.png",
      name: "Alexandre Pereira",
      role: "Web Developer",
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 😁", },
      { type: 'paragraph', content: "Acabei de iniciar meu projeto do Ignite 🧪", },

      { type: 'link', content: "#novoprojeto", },
    ],
    publishedAt: new Date(2017,10,25),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content  : [
      { type: 'paragraph', content: "Fala galeraa 😁", },
      { type: 'paragraph', content: "Eu sou um dos professores do projeto do Ignite 🧪", },
      { type: 'paragraph', content: "Qualquer coisa me chama" },
      
    ],
      publishedAt: new Date(2017,10,25),
  },
];
function App() {
  return (
    <div>
      <Hearder/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedbAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}

export default App
