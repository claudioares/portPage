import { useEffect, useState } from 'react';
import './styles.css';
import { Outlet } from 'react-router-dom';
import { useNavigate, useResolvedPath } from 'react-router-dom';


export default function Header () {
    const navegate = useNavigate();
    const {
        pathname
    } = useResolvedPath();
    
    const initPage = window.onload;

    const [colorOfSelect, setColorOfSelect] = useState({
        init : "",
        abautme: "",
        aplications: ""
    })

    const handleDetectedOptionsHeader = () =>{
        if(pathname === '/'){
            setColorOfSelect({
                init : "#964862",
                abautme: "#808080",
                aplications: "#808080"
            })
        }
        if(pathname === '/abautme'){
            setColorOfSelect({
                init : "#808080",
                abautme: "#964862",
                aplications: "#808080"
            })
        }
        if(pathname === '/aplications'){
            setColorOfSelect({
                init : "#808080",
                abautme: "#808080",
                aplications:"#964862"
            })
        }
    }

    useEffect(()=>{
        handleDetectedOptionsHeader();
    },[initPage])
  

    const handleClickOptionsHeader = (e) =>{
        e.preventDefault()
        const choolseSelect = e.target.id;


        if(choolseSelect === 'init'){
            navegate('/');
            setColorOfSelect({
                init : "#964862",
                abautme: "#808080",
                aplications: "#808080"
            })
        }
        if(choolseSelect === 'aboutme'){
            navegate('/abautme');
            setColorOfSelect({
                init : "#808080",
                abautme: "#964862",
                aplications: "#808080"
            })
        }
        if(choolseSelect === 'aplications'){
            navegate('/aplications');
            setColorOfSelect({
                init : "#808080",
                abautme: "#808080",
                aplications:"#964862"
            })
        }
    }
    return(
        <>
            <div className="container_header">
                <nav className="nav">
                    <ul className='ul' onClick={(e)=>{handleClickOptionsHeader(e)}}>
                        <a href="/" style={{color:colorOfSelect.init}} id='init'>Inicio</a>
                        <a href="/abautme" style={{color:colorOfSelect.abautme}} id='aboutme'>Sobre mim</a>
                        <a href="/aplications" style={{color:colorOfSelect.aplications}} id='aplications'>Aplicações</a>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}