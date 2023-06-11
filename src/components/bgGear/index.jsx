import './styles.css';
import gearOne from '../../assets/about/gearOne.svg';
import gearTwo from '../../assets/about/gearTwo.svg';
import gearTree from '../../assets/about/gearTree.svg';
import gearBg from '../../assets/about/gearBg.svg';

const BgGear = ({bg, defTop}) =>{
    
    return(
        <>
            <div className="container_bg_gear" style={{background:bg, top:defTop}}>
                <img src={gearOne} alt="" className='gear gOne' id='rotationReverse' />
                <img src={gearTwo} alt="" className='gear gTwo' id='rotationReverse' />
                <img src={gearTree} alt="" className='gear gTree' id='rotationReverse' />
                <img src={gearBg} alt="" className='gear gBg' />  
            </div>
        </>
    )
}

export default BgGear;