import { createContext, useState, useContext } from 'react';
import {ContextApi} from './ContextApi'
import {iconsColors} from '../utils';



export const ContextHoverProvider = createContext();


export default function HoverProvider ({children}) {

    const [iconsColorsAll, setIconColorsAll ] = useState({
        experience: iconsColors[0].experience.white,
        formation: iconsColors[0].formations.white,
        project: iconsColors[0].projects.white,
        curriculum: iconsColors[0].curriculum.white
    })

    let setClick = false;

    const [iconPosition, setIconPosition] = useState({
        experience : {
            right:'', 
            top:'',
        }
    });


    
    const activeIconSelect = (e) =>{
        setClick = true;
        if(e.target.id === 'experience'){
            setIconColorsAll({
                ...iconsColorsAll,
                experience: iconsColors[0].experience.metalic,
            })
        }
        if(e.target.id === 'formation'){
            setIconColorsAll({
                ...iconsColorsAll,
                formation: iconsColors[0].formations.pink,
            })
        }
        if(e.target.id === 'project'){
            setIconColorsAll({
                ...iconsColorsAll,
                project: iconsColors[0].projects.yellow,
            })
        }
        if(e.target.id === 'curriculum'){
            setIconColorsAll({
                ...iconsColorsAll,
                curriculum: iconsColors[0].curriculum.green
            })
        }
    }

    function resetStateInit () {
        setClick = false;
        setIconColorsAll({
            experience: iconsColors[0].experience.white,
            formation: iconsColors[0].formations.white,
            project: iconsColors[0].projects.white,
            curriculum: iconsColors[0].curriculum.white
        });
        setIconPosition({
            experience : {
                right:'', 
                top:'',
            }
        })
    }

  
   
    return(
        <ContextHoverProvider.Provider value={{
            iconsColorsAll, activeIconSelect, resetStateInit, 
            iconPosition,
          
        }}>
            {children}
        </ContextHoverProvider.Provider>
    )
};
