import './styles.css';


const Card = ({cardOne, cardTwo, rightPosition, bottomPosition, topPosition}) => {


    return (
        <>
            <div className="container_card" style={{
                    right:rightPosition,
                    bottom:bottomPosition,
                    top:topPosition
                }}>
                {cardOne && <div className="card_one">
                    <div className='line'>
                        <span>
                            {cardOne.spanOne }
                        </span>
                        <a href="https://www.unicid.edu.br/" target='_blank'> UNICID | Universidade Cidade de São Paulo</a>
                    </div>
                    <div className="line">
                        <span>
                            {cardOne.spanTwo}
                        </span>   
                        <a href="https://cubos.academy/" target='_blank'>Cubos Academy</a>
                    </div>
                </div>}
                {cardTwo && <div className="card_two">
                    <span>
                        {cardTwo.spanTwo}   
                    </span>
                    <p>
                        {cardTwo.p.oneP}
                    </p>
                    <p>
                        {cardTwo.p.twoP}
                    </p>
                    <p>
                        {cardTwo.p.treeP}
                    </p>
                </div>}
            </div>
        </>
    )
}

export default Card;    