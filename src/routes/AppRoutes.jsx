import { Routes, Route, Navigate } from 'react-router-dom';
import HomeLayout from '../pages/layout/HomeLayout';
import Login from '../pages/auth/Login';
import Consultation from '../pages/consultation/Consultation';
import NurseConsultation from '../pages/consultation/NurseConsultation';
import Register from '../pages/auth/Register';
import DoctorLogin from '../pages/auth/DoctorLogin';
import DoctorSignup from '../pages/auth/DoctorSignup';
import Medicine from '../pages/medicine/Medicine';
import Cart from '../pages/cart/Cart';
import Shipping from '../pages/cart/Shipping';
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
            <Route path="/doctor/login" element={<DoctorLogin />} />
            <Route path="/doctor/signup" element={<DoctorSignup />} />
            <Route path="/medicine/store" element={<Medicine />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<Shipping />} />
        </Routes>
    );
};

export default AppRoutes;