import './styles.css';


// eslint-disable-next-line react/prop-types
export default function Typing ({formationDiscripition}) {
    return(
        <>
            <div className='typing_function' style={{width:'283px'}}>
                <p className='description green'>{formationDiscripition}</p>
                <p className='green'>|</p>
            </div>
        </>
    )
}