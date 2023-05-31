import './styles.css';
import imgUser from '../../assets/about/user.svg';
import BgGear from './bgGear';
import { useContext } from 'react';
import { ContextApi } from '../../Contexts/ContextApi';
import IconToNavegation from './iconNavegation';


const AboutmeBody = () =>{

    const {
        animateFunctionClickEvent
    } = useContext(ContextApi);


    return(
        <>
            <div className="container_aboutme_body">
                <div className="contaier_circles ">
                    <BgGear />
                    <IconToNavegation />
                    <div 
                        className="circle_ one "
                        onClick={()=>{animateFunctionClickEvent()}}
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