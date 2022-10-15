import { useState } from 'react';
import { Play } from "phosphor-react";
import { CountDownContainer, HomeContainer, FormContainer,Separator,StartCountDownButton, TaskInput, MinutesAmountInput } from './styles';

export function Home() {
    const [task, setTask] = useState('');
    function handleSubmit(event) {
        console.log(event.target.task.value)
        return (event.target.task.value)
    }
    return (
        <HomeContainer>
            <form onSubmit={handleSubmit} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        name='task'
                        list="task-suggestion"
                        placeholder="Dê um nome para seu projeto"
                        onChange={(e)=>setTask(e.target.value)}
                        // value={task}
                    />
                    
                    <datalist id='task-suggestion'>
                        <option value='Gabiru Alado' />
                        <option value='Gabiru Calmo' />
                        <option value='Gabiru Bebado' />
                        <option value='Gabiru Pixuluco' />
                        <option value='Gabiru Birubiruleibe' />
                        
                    </datalist>

                    <label htmlFor="minutesAmount"></label>
                    <MinutesAmountInput
                        type="number"
                        id='minutesAmount'
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountDownButton disabled={!task} type='submit'>
                    <Play size={24} />
                    Começar
                </StartCountDownButton>
            </form>
        </HomeContainer>
        
    );
}