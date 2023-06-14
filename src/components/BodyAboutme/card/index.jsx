import './styles.css';


const Card = ({cardOne, cardTwo}) => {


    return (
        <>
            <div className="container_card">
               {/* <span>
                    {cardOne.spanOne}
               </span>
               <span>
                    {cardOne.spanTwo}
               </span>     */}
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
            </div>
        </>
    )
}

export default Card;    