import './styles.css';
import experience from '../../../assets/about/icons/experiences/white.svg';

const IconToNavegation = () =>{
    return(
        <>
            <div className="container_icon" id='rotation'>
                <div className="container_icon_navegation" >
                    <img src={experience} alt="" id='rotation' />
                </div>
            </div>
        </>
    )
}


export default IconToNavegation;