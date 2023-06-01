import './styles.css';
import { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../../Contexts/ContextApi';
import gearOne from '../../../assets/about/gearOne.svg';
import gearTwo from '../../../assets/about/gearTwo.svg';
import gearTree from '../../../assets/about/gearTree.svg';
import gearBg from '../../../assets/about/gearBg.svg';

const BgGear = ({bg, defTop, stateDisplay}) =>{

    const {activeRotateGear} = useContext(ContextApi);
    const [stateRotationGearCenter, setStateRotationGearCenter] = useState(
        'gcenterWhite rotation_init_gear'
    )

    useEffect(()=>{
        setTimeout(()=>{
            setStateRotationGearCenter(
                'gcenterWhite rotation'
            )
        }, 4000)

    },[stateRotationGearCenter])
    
    return(
        <>
            <div className="container_gear" style={{background:bg, top:defTop}}>
                <img src={gearOne} alt="" className='gear gOne' id='rotationReverse' />
                <img src={gearTwo} alt="" className='gear gTwo' id='rotationReverse' />
                <div className="container_center" id={activeRotateGear}  style={{display:stateDisplay}}>
                    <img 
                        src={gearTwo} 
                        alt="Uma engrenagem de com braca" 
                        className={stateRotationGearCenter}
                    />
                </div>
                <img src={gearTree} alt="" className='gear gTree' id='rotationReverse' />
                <img src={gearBg} alt="" className='gear gBg' />  
            </div>
        </>
    )
}

export default BgGear;