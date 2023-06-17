import { ContextApi } from "../../Contexts/ContextApi";
import { useContext, useState, useEffect } from "react";
import gearTwo from '../../assets/about/gearTwo.svg'
import './styles.css';


const Gear = ({stateDisplay, gearSelectWidth}) => {

    const {activeRotateGear} = useContext(ContextApi)

    const [stateRotationGearCenter, setStateRotationGearCenter] = useState(
        'gcenterWhite rotation_init_gear'
    )


    useEffect(()=>{
        setTimeout(()=>{
            setStateRotationGearCenter(
                'gcenterWhite rotation'
            )
        }, 2500)

    },[stateRotationGearCenter])
    return(
        <>
            <div className="container_gear" id={activeRotateGear}  style={{
                    display:stateDisplay
                }}>
                <img 
                    src={gearTwo} 
                    alt="Uma engrenagem de com braca" 
                    className={stateRotationGearCenter}
                    style={{width:gearSelectWidth}}
                /> 
            </div>
        </>
    )
};

export default Gear;