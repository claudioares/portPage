import {Route, Routes} from 'react-router-dom';
import Init from '../pages/Init';
import Header from '../components/header';
import Navbar from '../components/Navbar';
import Aboutme from '../pages/Aboutme';
import Aplications from '../pages/APlications';

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