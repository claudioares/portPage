import {Route, Routes} from 'react-router-dom';
import Init from '../PAGES/Init';
import Header from '../components/header';
import Navbar from '../components/Navbar';
import Aboutme from '../PAGES/Aboutme';
import Aplications from '../PAGES/APlications';

export default function MainHouter () {
    return(
        <Routes>
            <Route path='/' element={
                <>
                    <Header />
                    <Navbar />
                    <Init />
                </>
            } >
            </Route>

            <Route path='/abautme' element={
                <>
                    <Header />
                    <Navbar />
                    <Aboutme />
                </>
            } />

            <Route path='/aplications' element={ 
                <>
                    <Header />
                    <Navbar />
                    <Aplications />
                </>
            } />
        </Routes>  
    )
}