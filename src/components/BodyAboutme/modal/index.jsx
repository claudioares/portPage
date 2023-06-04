import './styles.css';
import {useContext} from 'react';
import { ContextHoverProvider } from '../../../Contexts/ContextFunctionsHover';

const Modal = () => {

    const {displayModal} = useContext(ContextHoverProvider)

    return(
        <>
            <div className="div_aling_modal">
                {displayModal.display && <div className={displayModal.class}>
                    <h1>experiencias</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ratione voluptatum ipsa dolore? Ipsa vero deleniti nesciunt pariatur, assumenda totam ut perferendis delectus praesentium sequi ratione eveniet impedit magni officiis?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ratione voluptatum ipsa dolore? Ipsa vero deleniti nesciunt pariatur, assumenda totam ut perferendis delectus praesentium sequi ratione eveniet impedit magni officiis?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ratione voluptatum ipsa dolore? Ipsa vero deleniti nesciunt pariatur, assumenda totam ut perferendis delectus praesentium sequi ratione eveniet impedit magni officiis?</p>
                </div>}
            </div>
        </>
    )
};

export default Modal;