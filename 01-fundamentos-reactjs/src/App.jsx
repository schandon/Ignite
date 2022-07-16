import { Hearder } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Hearder/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author='Alexandre Souza'
            content = 'Coe mané, ai é pika'
          />
          <Post
            author='Renata Romanelli'
            content = 'Nesta data irei estar ocupada'
          />
        </main>
      </div>
    </div>
  )
}

export default App
