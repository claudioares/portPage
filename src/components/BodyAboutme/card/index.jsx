import './styles.css';


const Card = ({cardOne, cardTwo, rightPosition, bottomPosition, topPosition}) => {


    return (
        <>
            <div className="container_card" style={{
                    right:rightPosition,
                    bottom:bottomPosition,
                    top:topPosition
                }}>
                <div className="card_one">
                    <span>
                        {cardOne && cardOne.spanOne }
                    </span>
                    <a href="https://www.unicid.edu.br/">UNICID | Universidade Cidade de São Paulo</a>
                    <span>
                        {cardOne && cardOne.spanTwo}
                    </span>   
                </div>
                <div className="card_two">
                    <span>
                        {cardTwo && cardTwo.spanTwo}   
                    </span>
                    <p>
                        {cardTwo && cardTwo.p.oneP}
                    </p>
                    <p>
                        {cardTwo && cardTwo.p.twoP}
                    </p>
                    <p>
                        {cardTwo && cardTwo.p.treeP}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card;    