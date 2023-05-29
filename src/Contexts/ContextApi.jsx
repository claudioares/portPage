import {createContext, useState} from 'react'


export const ContextApi = createContext();

function ContextProvider ({ children }) {

    const [activeRotateGear, setActiveRotateGear] = useState(null);


    return(
        <ContextApi.Provider value={{
            activeRotateGear, setActiveRotateGear
        }}>
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;