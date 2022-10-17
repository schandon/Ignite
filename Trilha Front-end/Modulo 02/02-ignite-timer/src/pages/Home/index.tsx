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

export function Home() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,

        }
    });

    const task = watch('task');
    const isSubmitDisable = !task;
    
    function handleCreateNewCycle(data: any) {
        console.log(data)
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
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountDownButton disabled={isSubmitDisable} type='submit'>
                    <Play size={24} />
                    Começar
                </StartCountDownButton>
            </form>
        </HomeContainer>
        
    );
}