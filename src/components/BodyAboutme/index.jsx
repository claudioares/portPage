import BgGear from '../bgGear';
import ObjectCenterAboutme from './objectCenterAboutme';
import './styles.css';


const AboutmeBody = () =>{

    return(
        <>
            <div className="container_aboutme_body">
                    <BgGear
                        bg = '#121416c0'
                    />
                <div className="container_objects_center_aboutme " >
                    <ObjectCenterAboutme />
                </div>
            </div>
        </>
    )
}

export default AboutmeBody;