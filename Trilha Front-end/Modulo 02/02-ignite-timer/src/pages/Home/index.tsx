import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { Play } from "phosphor-react";

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
    CountDownContainer,
    HomeContainer,
    FormContainer,
    Separator,
    StartCountDownButton,
    TaskInput,
    MinutesAmountInput
} from './styles';


const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod
        .number()
        .min(5, "O ciclo precisa ser de no mínimo de 5 minutos")
        .max(60, "O ciclo precisa ser de no máximo de 60 minutos"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


interface Cycle {
    id: string,
    task: string,
    minutesAmount: number,
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
    
    //funções do useForm
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,

        }
    });

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
    
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;


    const minutes = String(minutesAmount).padStart(2,'0');
    const seconds = String(secondsAmount).padStart(2,'0');

    const task = watch('task');
    const isSubmitDisable = !task;
    
    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime());

        const newCycle:Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
        }

        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(id);
        reset();

    }


    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        list="task-suggestion"
                        placeholder="Dê um nome para seu projeto"
                        {...register('task')}
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
                        placeholder="00"
                        step={5}
                        {...register('minutesAmount',{valueAsNumber: true})}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountDownContainer>

                <StartCountDownButton disabled={isSubmitDisable} type='submit'>
                    <Play size={24} />
                    Começar
                </StartCountDownButton>
            </form>
        </HomeContainer>
        
    );
}