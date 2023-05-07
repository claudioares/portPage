import './styles.css';
import link from '../../assets/navbar/linkedin.svg';
import linkHover from '../../assets/navbar/linkHover.svg';
import whats from '../../assets/navbar/whatsapp.svg'
import whatsHover from '../../assets/navbar/whatsHover.svg'
import git from '../../assets/navbar/github.svg'
import gitHover from '../../assets/navbar/gitHover.svg'
import line from '../../assets/navbar/line.svg'
import { useState } from 'react';


export default function Navbar () {
    const [iconSocialContact, SetIconSocialContact] = useState([
        {icon:link, alt: 'Logo do linkedin'},
        {icon:whats, alt: 'Logo do whatsapp'},
        {icon:git, alt: 'Logo do github'}
    ])
    function mauseOver (e) {
        let selectLogo = e.target.alt;
        selectLogo === 'Logo do linkedin' && SetIconSocialContact([
            {icon:linkHover, alt: 'Logo do linkedin'},
            {icon:whats, alt: 'Logo do whatsapp'},
            {icon:git, alt: 'Logo do github'}
        ]);
        selectLogo === 'Logo do whatsapp' && SetIconSocialContact([
            {icon:link, alt: 'Logo do linkedin'},
            {icon:whatsHover, alt: 'Logo do whatsapp'},
            {icon:git, alt: 'Logo do github'}
        ]);
        selectLogo === 'Logo do github' && SetIconSocialContact([
            {icon:link, alt: 'Logo do linkedin'},
            {icon:whats, alt: 'Logo do whatsapp'},
            {icon:gitHover, alt: 'Logo do github'}
        ]);
    }
    function mouseOut (e) {
        SetIconSocialContact([
            {icon:link, alt: 'Logo do linkedin'},
            {icon:whats, alt: 'Logo do whatsapp'},
            {icon:git, alt: 'Logo do github'}
        ]);
    }
    return(
        <div className="container_navbar">
            <nav className='navbar_nav'>
                {iconSocialContact.map(obj => (
                    <div key={obj.alt}>
                        <img 
                            src={obj.icon} alt={obj.alt}
                            onMouseOver={(e)=>mauseOver(e)}
                            onMouseOut={(e)=>mouseOut(e)}
                        />
                    </div>
                ))
                }
                <div className="line">
                    <img src={line} alt="Linha colorida" />
                </div>
            </nav>
        </div>
    )
}