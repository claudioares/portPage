import './styles.css';
import programer from '../../../assets/programer_img.svg';
import { useRef } from 'react';


export default function Init () {
    const textDescription = useRef(null)

    console.log('esta funcionando?')    
    return (
        <>
            <div className="container_init">
                <div className="part">
                    <div className="left">
                        <h1>Claudio Soares</h1>
                        <div className='descripton_function'>
                            <p className='description' ref={textDescription}>Desenvolvedor FullStack</p>
                            <p>|</p>
                        </div>
                    </div>
                </div>
                <div className="right part">
                    <img src={programer} alt="icone de detalhes" />
                </div>
            </div>
        </>
    )
}