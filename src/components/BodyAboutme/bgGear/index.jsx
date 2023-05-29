import './styles.css';
import { useContext } from 'react';
import { ContextApi } from '../../../Contexts/ContextApi';
import gearOne from '../../../assets/about/gearOne.svg';
import gearTwo from '../../../assets/about/gearTwo.svg';
import gearTree from '../../../assets/about/gearTree.svg';
import gearBg from '../../../assets/about/gearBg.svg';

const BgGear = () =>{

    const {activeRotateGear} = useContext(ContextApi);

    
    return(
        <>
            <div className="container_gear">
                <img src={gearOne} alt="" className='gear gOne' id='rotation' />
                <img src={gearTwo} alt="" className='gear gTwo' id='rotationReverse' />
                <img 
                    src={gearTwo} 
                    alt="Uma engrenagem de com braca" 
                    className='gcenterWhite'
                    id={activeRotateGear}
                />
                <img src={gearTree} alt="" className='gear gTree' id='rotationReverse' />
                <img src={gearBg} alt="" className='gear gBg' />  
            </div>
        </>
    )
}

export default BgGear;