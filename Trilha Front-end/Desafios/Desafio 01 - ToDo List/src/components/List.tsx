import { useState } from 'react';
import styles from 'List.module.css';
import { CheckCircle } from 'phosphor-react';
import { Trash } from 'phosphor-react'

interface Task{
    id: string;
    content: string;
    isComplete: boolean;
}
export default function List({ id, content, isComplete }:Task) {
    <>
        <div className={styles.inicio}>
            <CheckCircle/>
        </div>
        <div className={styles.meio}>
            <p> {content} </p>
        </div>   
        <div className={styles.fim}>
            <button title='Deletas a Task'>
                <Trash size={24}/>
            </button>
        </div>   
    </>
    return ('');
}