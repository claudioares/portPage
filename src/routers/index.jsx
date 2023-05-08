import {Route, Routes} from 'react-router-dom';
import Init from '../components/pages/Init'
import Header from '../components/header';
import Navbar from '../components/Navbar';
import Aboutme from '../components/pages/Aboutme';

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
                    <Aboutme />
                </>
            } />
        </Routes>  
    )
}