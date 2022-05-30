
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css'
import NavBar from './NavBar';
import MiniDrawer from './Drawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MentorAdmin from './MentorAdmin';
import RequestAdmin from './RequestAdmin';
import BatchAdmin from './BatchAdmin';

function Adminpage() {
    return (

        // <div>
        <BrowserRouter>

        <Routes>
            <Route path='/' element={<><NavBar /> <MiniDrawer /> <BatchAdmin/> </> }>
                
            </Route>

            <Route path='/Mentor' element={<><NavBar /> <MiniDrawer /> <MentorAdmin/></>}></Route>
            <Route path='/Request' element={<><NavBar /> <MiniDrawer /> <RequestAdmin/></>}></Route>
        </Routes>
            </BrowserRouter>
        // </div>
    )
}

export default Adminpage