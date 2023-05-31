import { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../../Contexts/ContextApi';
import { ContextHoverProvider } from '../../../Contexts/ContextFunctionsHover';
import './styles.css';



const IconToNavegation = () =>{

    const {
        activeRotateGear
    } = useContext(ContextApi);
    const {
        activeMauseOver,
        activeMouseOut,
        iconsColorsAll
    } = useContext(ContextHoverProvider)

    const [classActiveAnimateIcons, setClassActiveAniteIcons] = useState(
        "container_icon rotation_init"
    )
    useEffect(()=>{
        activeRotateGear && setClassActiveAniteIcons("container_icon");
    }, [activeRotateGear])

  
    const activeExperience = (e) =>{
        console.log(e.target.id)
    }



    return(
        <>
            <div className="container_center">
                <div className={classActiveAnimateIcons} id={activeRotateGear}>
                    <div 
                        className="content_icon experience"
                        onClick={(e)=>activeExperience(e)}
                        onMouseOver={(e)=>activeMauseOver(e)}
                        onMouseOut={(e)=>activeMouseOut(e)}
                    >
                        <img src={iconsColorsAll.experience} alt="" id='experience' />
                    </div>
                    
                    <div 
                        className="content_icon formation"
                        onClick={(e)=>activeExperience(e)}
                        onMouseOver={(e)=>activeMauseOver(e)}
                        onMouseOut={(e)=>activeMouseOut(e)}
                    >
                        <img src={iconsColorsAll.formation} alt="" id='formation' />
                    </div>

                    <div 
                        className="content_icon project"
                        onClick={(e)=>activeExperience(e)}
                        onMouseOver={(e)=>activeMauseOver(e)}
                        onMouseOut={(e)=>activeMouseOut(e)}
                    >
                        <img src={iconsColorsAll.project} alt="" id='project' />
                    </div>

                    <div 
                        className="content_icon curriculum"
                        onClick={(e)=>activeExperience(e)}
                        onMouseOver={(e)=>activeMauseOver(e)}
                        onMouseOut={(e)=>activeMouseOut(e)}
                    >
                        <img src={iconsColorsAll.curriculum} alt="" id='curriculum' />
                    </div>
                </div>
            </div>
        </>
    )
}


export default IconToNavegation;