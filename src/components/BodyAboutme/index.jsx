import { useContext } from 'react';
import { ContextApi } from '../../Contexts/ContextApi';
import { ContextHoverProvider } from '../../Contexts/ContextFunctionsHover';
import imgUser from '../../assets/about/user.svg';
import BgGear from './bgGear';
import Modal from './modal';
import IconAboutme from './iconAboutme';
import './styles.css';


const AboutmeBody = () =>{

    const {
        animateFunctionClickEvent
    } = useContext(ContextApi);
    const {
        resetStateInit
    } = useContext(ContextHoverProvider)


    return(
        <>
            <div className="container_aboutme_body">
                <Modal />
                <div className="contaier_circles ">
                    <BgGear
                        bg = '#121416c0'
                    />
                    <IconAboutme />
                    <div 
                        className="circle_ one "
                        onClick={()=>{animateFunctionClickEvent(), resetStateInit()}}
                    >
                        <div className="circle_ two">
                            <div className="circle_ tree">
                                <img src={imgUser} alt="" className='userImg'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutmeBody;