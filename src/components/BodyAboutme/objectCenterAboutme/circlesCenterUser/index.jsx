import { useContext } from 'react';
import { ContextApi } from '../../../../Contexts/ContextApi';
import { ContextHoverProvider } from '../../../../Contexts/ContextFunctionsHover';
import imgUser from '../../../../assets/user.svg';
import './styles.css';

const LinesCirclesOfUser = () => {

    const {animateFunctionClickEvent} = useContext(ContextApi);
    const {resetStateInit} = useContext(ContextHoverProvider);
    
    return(
        <>
            <div 
                className="circle_ one "
                onClick={()=>{animateFunctionClickEvent(), resetStateInit()}}
            >
                <div className="circle_ two">
                    <div className="circle_ tree" />
                </div>
            </div>
        </>
    )
}


export default LinesCirclesOfUser;