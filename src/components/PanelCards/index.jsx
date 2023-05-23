import cards from '../../utils';
import './styles.css';

export default function Projects() {
  

    return (
    
        <div className='divProjects' id='aplicacoes'>
            {/* <h2>Projects</h2> */}
            <div className="container_projects">
                <div className="conainer_carousel">
                    {cards.map(card => (
                        <img src={card.img} alt='Imagem de um card' key={card.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

