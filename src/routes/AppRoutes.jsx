import { Routes, Route, Navigate } from 'react-router-dom';
import HomeLayout from '../pages/layout/HomeLayout';
import Login from '../pages/auth/Login';
import Consultation from '../pages/consultation/Consultation';
import NurseConsultation from '../pages/consultation/NurseConsultation';
import Register from '../pages/auth/Register';
const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<HomeLayout />} /> */}
            <Route path="/" element={<HomeLayout />}>
                {/* Add nested routes inside HomeLayout */}
                <Route index element={<Navigate to="find-doctor" />} />
                <Route path="find-doctor" element={<Consultation />} />
                <Route path="find-nurse" element={<NurseConsultation />} />
            </Route>
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
        </Routes>
    );
};

export default AppRoutes;