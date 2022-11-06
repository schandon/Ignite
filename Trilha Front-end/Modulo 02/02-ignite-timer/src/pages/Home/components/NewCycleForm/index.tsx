import { FormContainer, TaskInput,  MinutesAmountInput} from './styles'

export function NewCycleForm(){
    return (
        <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        list="task-suggestion"
                        placeholder="Dê um nome para seu projeto"
                        disabled={!!activeCycle}
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
                        min={1}
                        disabled={!!activeCycle}
                        {...register('minutesAmount',{valueAsNumber: true})}
                    />

                    <span>minutos.</span>
                </FormContainer>
    )
}