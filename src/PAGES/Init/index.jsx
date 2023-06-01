import './styles.css';
import Typing from '../../components/typing';
import BgGear from '../../components/BodyAboutme/bgGear';

export default function Init () {

    return (
        <>
            <div className="container init">
                    <div className="left">
                        <h1>Cláudio Soares</h1>
                        <Typing 
                            formationDiscripition='Desenvolvedor FullStack'
                        />
                    </div>
                    <div className="right" >
                        <BgGear />
                    </div>
            </div>
        </>
    )
}