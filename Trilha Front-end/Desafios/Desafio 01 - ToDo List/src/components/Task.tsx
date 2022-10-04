import { useState } from 'react';
import logotasklist from '../assets/Clipboard.png'
import styles from './Task.module.css'

export default function ToDo() {
    const [createTask, newCreateTask] = useState(0);
    const [taskDone, newTaskDone] = useState(0);
    
    
    function checkList() {
        if (!createTask) {
            return false;
        }
    }


    return (
        <div className={styles.list}>
        <div className={styles.info}>
                <p className={styles.criadas}>
                    <p className={styles.taskCriada}>
                        Tarefas criadas
                    </p>
                    <p className={styles.count}>
                        {createTask}
                    </p>
                </p>
                <p className={styles.terminadas}>
                    <p className={styles.taskTerminada}>
                        Concluídas
                    </p>
                    <p className={styles.count}>
                        {taskDone}
                    </p>
                </p>
        </div>
        <div className={styles.content}>
                {checkList() ?(
                    <>
                        <p>Parabéns você tem uma lista criada</p>
                    </>
                ) : (
                    <>
                        <img src={logotasklist} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </>
                )
                }
        </div>
        </div>
    );
}