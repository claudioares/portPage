import {Route, Routes} from 'react-router-dom';
import Home from '../Home';
import Header from '../components/header';
import Navbar from '../components/Navbar';
import Aboutme from '../components/pages/Aboutme';
import Aplications from '../components/pages/APlications';

export default function MainHouter () {
    return(
        <Routes>
            <Route path='/' element={
                <>
                    <Header />
                    <Navbar />
                    <Home />
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