import BgGear from '../bgGear';
import Card from './card';
import ObjectCenterAboutme from './objectCenterAboutme';
import './styles.css';


const AboutmeBody = () =>{

    const card = {
        cardOne:{
            spanOne:`Já desenvolvo a mais de um ano e sou graduando em Inteligencia Artificial pela`,
            spanTwoOne:'Cursei 8 meses de desenvolvimento de software pela Cubos Academy',
        },
        cardTwo: {
            spanTwo:'Estudo conceitos de desenvolvimento:',
            p:{
                oneP:'Ideialização, organização, compreenção das regras de negocio do projeto.',
                twoP:'Tecnologias a serem usada para desenvolvimento',
                treeP:'Versionamento de codigos e deploy pra produção de fato'
            }
        }
    }

    return(
        <>
            <div className="container_aboutme_body">
                    <BgGear
                        bg = '#121416c0'
                    />
                <div className="container_objects_center_aboutme " >
                    <ObjectCenterAboutme />
                </div>
                <Card 
                    cardOne={card.cardOne}
                    rightPosition='5rem'
                    topPosition='4rem'
                />
                <Card 
                    cardTwo={card.cardTwo}
                    rightPosition='5rem'
                    bottomPosition='4rem'
                />

            </div>
        </>
    )
}

export default AboutmeBody;