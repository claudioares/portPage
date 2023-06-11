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
        {icon:link, alt: 'Logo do linkedin', socialLink:'https://www.linkedin.com/in/claudio-soares-dev/'},
        {icon:whats, alt: 'Logo do whatsapp', socialLink:''},
        {icon:git, alt: 'Logo do github', socialLink:'https://github.com/claudioares'}
    ])
    function mauseOver (e) {
        let selectLogo = e.target.alt;
        selectLogo === 'Logo do linkedin' && SetIconSocialContact([
            {icon:linkHover, alt: 'Logo do linkedin', socialLink:'https://www.linkedin.com/in/claudio-soares-dev/'},
            {icon:whats, alt: 'Logo do whatsapp', socialLink:''},
            {icon:git, alt: 'Logo do github', socialLink:'https://github.com/claudioares'}
        ]);
        selectLogo === 'Logo do whatsapp' && SetIconSocialContact([
            {icon:link, alt: 'Logo do linkedin', socialLink:'https://www.linkedin.com/in/claudio-soares-dev/'},
            {icon:whatsHover, alt: 'Logo do whatsapp', socialLink:''},
            {icon:git, alt: 'Logo do github', socialLink:'https://github.com/claudioares'}
        ]);
        selectLogo === 'Logo do github' && SetIconSocialContact([
            {icon:link, alt: 'Logo do linkedin', socialLink:'https://www.linkedin.com/in/claudio-soares-dev/'},
            {icon:whats, alt: 'Logo do whatsapp', socialLink:''},
            {icon:gitHover, alt: 'Logo do github', socialLink:'https://github.com/claudioares'}
        ]);
    }
    function mouseOut () {
        SetIconSocialContact([
            {icon:link, alt: 'Logo do linkedin', socialLink:'https://www.linkedin.com/in/claudio-soares-dev/'},
            {icon:whats, alt: 'Logo do whatsapp', socialLink:''},
            {icon:git, alt: 'Logo do github', socialLink:'https://github.com/claudioares'}
        ]);
    }

    return(
        <div className="container_navbar">
                {iconSocialContact.map(obj => (
                    <div key={obj.alt}>
                        <a href={obj.socialLink} target='_blank'>
                            <img 
                                src={obj.icon} alt={obj.alt}
                                onMouseOver={(e)=>mauseOver(e)}
                                onMouseOut={()=>mouseOut()}
                            />
                        </a>
                    </div>
                ))
                }
                <>
                    <img src={line} alt="Linha colorida" className='line'/>
                </>
        </div>
    )
}