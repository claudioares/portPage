import {Route, Routes} from 'react-router-dom';
import Home from '../Home'
import Header from '../components/header';
import Navbar from '../components/Navbar';
import Init from '../components/pages/Init';

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
            <Route path='/init' element={<Init />} />
            </Route>
        </Routes>
    )
}