import './styles.css';
import { Outlet } from 'react-router-dom';


export default function Header () {
    return(
        <>
            <div className="container_header">
                <nav className="nav">
                    <ul className='ul'>
                        <a href="/">Inicio</a>
                        <a href="/abautme">Sobre mim</a>
                        <a href="/aplications">Aplicações</a>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}