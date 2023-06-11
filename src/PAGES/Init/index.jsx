import './styles.css';
import Typing from '../../components/typing';
import BgGear from '../../components/bgGear';
import Gear from '../../components/Gear';


export default function Init () {

    return (
        <>
            <div className="container init">
                    <BgGear />
                    <div className="left">
                        <h1>Cláudio Soares</h1>
                        <Typing 
                            formationDiscripition='Desenvolvedor FullStack'
                        />
                    </div>
                    <div className="right" >
                        <Gear />
                    </div>
            </div>
        </>
    )
}