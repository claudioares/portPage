import {createContext, useState} from 'react'



export const ContextApi = createContext();

function ContextProvider ({ children }) {
    const [activeRotateGear, setActiveRotateGear] = useState(null);
    
    const animateFunctionClickEvent = () =>{
       
        if(activeRotateGear === null){
            setActiveRotateGear('rotationToClicEvent')
        } else {
            return;
        }

        setTimeout(()=>{
            setActiveRotateGear(null);
        }, 4000)
    }

  

    return(
        <ContextApi.Provider value={{
            activeRotateGear, setActiveRotateGear,
            animateFunctionClickEvent
        }}>
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;