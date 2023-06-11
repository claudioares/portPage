import CircleCenterUser from './circlesCenterUser';
import Gear from '../../Gear';
import Icons from './icons';
import './styles.css';





const ObjectCenterAboutme = () =>{


    return(
        <>
            <div 
                className="object_center_aboutme"
            >
                <Gear gearSelectWidth = '48rem'/>
                <CircleCenterUser />
                <Icons />
            </div>
        </>
    )
}


export default ObjectCenterAboutme;