import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainRouter = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRouter;