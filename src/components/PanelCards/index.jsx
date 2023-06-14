import cards from '../../utils';
import './styles.css';

export default function PanelCards() {
  
    return (
        <div className='divProjects' id='aplicacoes'>   
            <div className="conainer_carousel">
                {cards.map(card => (
                    <img src={card.img} alt='Imagem de um card' key={card.id} />
                ))}
            </div>
        </div>
    )
}

