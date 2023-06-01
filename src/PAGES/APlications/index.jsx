import './styles.css';
import PanelCards from "../../components/PanelCards";
import BgGear from '../../components/BodyAboutme/bgGear';


export default function Aplications () {
    return (
        <>
            <div className="container _aplications">
                <PanelCards />
                <BgGear
                    bg = '#121416c0'
                    stateDisplay = 'none'
                />
                <div className="container_app_test">
                    <h2>Teste uma aplicação!</h2>
                    <div className="content_aplications_to_test">
                        <div className="ladding_pages content_cards">
                            <h3>Lading Pages</h3>
                        </div>
                        <div className="app_spa content_cards">
                            <h3>Aplicações SPA</h3>
                        </div>
                        <div className="games content_cards">
                            <h3>Games</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}