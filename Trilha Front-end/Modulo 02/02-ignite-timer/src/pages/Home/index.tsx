import { Play } from "phosphor-react";
import { CountDownContainer, HomeContainer, FormContainer,Separator,StartCountDownButton, TaskInput, MinutesAmountInput } from './styles';

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        list="task-suggestion"
                        placeholder="Dê um nome para seu projeto"
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

                <StartCountDownButton disabled type='submit'>
                    <Play size={24} />
                    Começar
                </StartCountDownButton>
            </form>
        </HomeContainer>
        
    );
}