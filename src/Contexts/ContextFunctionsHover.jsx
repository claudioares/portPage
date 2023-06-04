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


    const [displayModal, setDisplayModal] = useState(
        {
            display: false,
            class: 'container_modal'
        }
    );
    const [iconPosition, setIconPosition] = useState({
        experience : {
            right:'', 
            top:'',
        }
    });
    const activeIconSelect = (e) =>{
        setClick(true);
        if(e.target.id === 'experience'){
            setIconColorsAll({
                ...iconsColorsAll,
                experience: iconsColors[0].experience.metalic,
            });

            if(iconPosition.experience.right === ''){
                setIconPosition({
                    experience : {
                        transform:'translate(900%,-100%)',
                        border: '3px solid rgb(129, 203, 197)'
                    }
                });
                setTimeout(()=>{
                    setDisplayModal(
                        {
                            display: true,
                            class: 'container_modal modal_animetion_open'
                        }
                    )
                }, 1200)
            } else {
                setIconPosition({
                    experience : {right:'', top:''}
                }),
                setDisplayModal(
                    {
                        display: false,
                        class: 'container_modal modal_animation_close'
                    }
                )
            }
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
        setClick(false);
        setIconColorsAll({
            experience: iconsColors[0].experience.white,
            formation: iconsColors[0].formations.white,
            project: iconsColors[0].projects.white,
            curriculum: iconsColors[0].curriculum.white
        });
        setDisplayModal(
            {
                display: false,
                class: 'container_modal'
            }
        );
        setIconPosition({
            experience : {
                right:'', 
                top:'',
            }
        })
    }

    return(
        <ContextHoverProvider.Provider value={{
            activeMauseOver, activeMouseOut, iconsColorsAll,
            activeIconSelect, resetStateInit, iconPosition,
            displayModal, setDisplayModal
        }}>
            {children}
        </ContextHoverProvider.Provider>
    )
};
