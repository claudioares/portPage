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
                    <div className='line_one'>
                        <span>
                            {cardOne.spanOne }
                        </span>
                        <a href="https://www.unicid.edu.br/" target='_blank'> UNICID | Universidade Cidade de São Paulo</a>
                    </div>
                    <span>
                        {cardOne.spanTwo}
                    </span>   
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