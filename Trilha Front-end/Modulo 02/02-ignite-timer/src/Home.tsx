import React, { useContext, useState } from 'react';
import { createContext } from 'react'

const CyclesContext = createContext({} as any);

function NewCycleForm(){
    let { activeCycle, setActiveCycle } = useContext(CyclesContext)
    
    return (
        <h1>NewCycleForm: {activeCycle}
        <button onClick={()=> {setActiveCycle(3)}}>Alterar Valor</button>
        </h1>
    );
    
}

function Countdown(){
    const { activeCycle } = useContext(CyclesContext)
    return (<h1>Countdown: {activeCycle}</h1>);
}


export function Home(){
    const [activeCycle, setActiveCycle] = useState(1)
    

    
    return(
        <CyclesContext.Provider value={{activeCycle, setActiveCycle}}>
            <div>
                <NewCycleForm/>
                <Countdown/>
            </div>
        </CyclesContext.Provider>
    );
}

