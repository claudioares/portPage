import './styles.css';
import PanelCards from "../../components/PanelCards";
import BgGear from '../../components/bgGear';
import {modelPages} from '../../utils'


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
                            <div className="content_pages">
                                <ul>
                                    {modelPages[0].map((page)=>(
                                        <li key={page.title}>
                                            <a href={page.pLink}>{page.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="app_spa content_cards">
                            <h3>Aplicações SPA</h3>
                            <div className="content_pages">
                                <ul>
                                    {modelPages[1].map((spa)=>(
                                        <li key={spa.title}>
                                            <a href={spa.pLink}>{spa.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="games content_cards">
                            <h3>Games</h3>
                            <div className="content_pages">
                                <ul>
                                    {modelPages[2].map((game)=>(
                                        <li key={game.title}>
                                            <a href={game.pLink}>{game.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}