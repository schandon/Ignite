import { Hearder } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://github.com/schandon.png" ,
      name:"Alexandre Pereira" ,
      role: "Web Developer",
    },
    publishedbAt: Date,
    contente: String
  }
 ]
function App() {
  return (
    <div>
      <Hearder/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
