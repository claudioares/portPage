import './styles.css';


export default function Typing ({discripition}) {
    return(
        <>
            <div className='typing_function' style={{width:'283px'}}>
                <p className='description'>{discripition}</p>
                <p>|</p>
            </div>
        </>
    )
}