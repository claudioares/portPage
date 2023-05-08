import './styles.css';
import programer from '../../../assets/programer_img.svg';
import Typing from '../../typing';

export default function Init () {

    return (
        <>
            <div className="container init">
                <div className="part">
                    <div className="left">
                        <h1>Cláudio Soares</h1>
                        <Typing 
                            discripition='Desenvolvedor FullStack'
                        />
                    </div>
                </div>
                <div className="right part">
                    <img src={programer} alt="icone de detalhes" />
                </div>
            </div>
        </>
    )
}