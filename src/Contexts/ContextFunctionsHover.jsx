import { createContext, useState } from 'react';
import {iconsColors} from '../utils';



export const ContextHoverProvider = createContext();


export default function HoverProvider ({children}) {

    const [iconsColorsAll, setIconColorsAll ] = useState({
        experience: iconsColors[0].experience.white,
        formation: iconsColors[0].formations.white,
        project: iconsColors[0].projects.white,
        curriculum: iconsColors[0].curriculum.white
    })

    const [click, setClick] = useState(false)

    const activeMauseOver = (e) =>{
        if(click === false){
            if(e.target.id === 'experience'){
                setIconColorsAll({
                    experience: iconsColors[0].experience.metalic,
                    formation: iconsColors[0].formations.white,
                    project: iconsColors[0].projects.white,
                    curriculum: iconsColors[0].curriculum.white
                })
            }
            if(e.target.id === 'formation'){
                setIconColorsAll({
                    experience: iconsColors[0].experience.white,
                    formation: iconsColors[0].formations.pink,
                    project: iconsColors[0].projects.white,
                    curriculum: iconsColors[0].curriculum.white
                })
            }
            if(e.target.id === 'project'){
                setIconColorsAll({
                    experience: iconsColors[0].experience.white,
                    formation: iconsColors[0].formations.white,
                    project: iconsColors[0].projects.yellow,
                    curriculum: iconsColors[0].curriculum.white
                })
            }
            if(e.target.id === 'curriculum'){
                setIconColorsAll({
                    experience: iconsColors[0].experience.white,
                    formation: iconsColors[0].formations.white,
                    project: iconsColors[0].projects.white,
                    curriculum: iconsColors[0].curriculum.green
                })
            }
        }

    }

    const activeMouseOut = () =>{
        if(click === false){
            setIconColorsAll({
                experience: iconsColors[0].experience.white,
                formation: iconsColors[0].formations.white,
                project: iconsColors[0].projects.white,
                curriculum: iconsColors[0].curriculum.white
            })
        }
    }

    const activeIconSelect = (e) =>{
        setClick(true);
        if(e.target.id === 'experience'){
            setIconColorsAll({
                experience: iconsColors[0].experience.metalic,
                formation: iconsColors[0].formations.white,
                project: iconsColors[0].projects.white,
                curriculum: iconsColors[0].curriculum.white
            })
        }
        if(e.target.id === 'formation'){
            setIconColorsAll({
                experience: iconsColors[0].experience.white,
                formation: iconsColors[0].formations.pink,
                project: iconsColors[0].projects.white,
                curriculum: iconsColors[0].curriculum.white
            })
        }
        if(e.target.id === 'project'){
            setIconColorsAll({
                experience: iconsColors[0].experience.white,
                formation: iconsColors[0].formations.white,
                project: iconsColors[0].projects.yellow,
                curriculum: iconsColors[0].curriculum.white
            })
        }
        if(e.target.id === 'curriculum'){
            setIconColorsAll({
                experience: iconsColors[0].experience.white,
                formation: iconsColors[0].formations.white,
                project: iconsColors[0].projects.white,
                curriculum: iconsColors[0].curriculum.green
            })
        }
    }

    function resetStateInit () {
        setClick(false);
        setIconColorsAll({
            experience: iconsColors[0].experience.white,
            formation: iconsColors[0].formations.white,
            project: iconsColors[0].projects.white,
            curriculum: iconsColors[0].curriculum.white
        })
    }

    return(
        <ContextHoverProvider.Provider value={{
            activeMauseOver, activeMouseOut, iconsColorsAll,
            activeIconSelect, resetStateInit
        }}>
            {children}
        </ContextHoverProvider.Provider>
    )
};
