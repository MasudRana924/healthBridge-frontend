import { Routes, Route, Navigate } from 'react-router-dom';
import HomeLayout from '../pages/layout/HomeLayout';
import Login from '../pages/auth/Login';
import Consultation from '../pages/consultation/Consultation';
import NurseConsultation from '../pages/consultation/NurseConsultation';
import Register from '../pages/auth/Register';
import DoctorLogin from '../pages/auth/DoctorLogin';
import DoctorSignup from '../pages/auth/DoctorSignup';
import Cart from '../pages/cart/Cart';
import Shipping from '../pages/cart/Shipping';
import MedicineLayout from '../pages/layout/MedicineLayout';
import NurseLayout from '../pages/layout/NurseLayout';
import SingleDoctor from '../pages/doctors/SingleDoctor';
import OnsiteAppointmentBooking from '../pages/appointment/OnsiteAppointmentBooking';
import UserLayout from '../pages/user-layout/UserLayout';
// import UpdateAccount from '../pages/user-layout/UpdateAccount';
import Prescription from '../pages/user-layout/Prescription';
import Orders from '../pages/user-layout/Orders';
import UserDetails from '../pages/user/UserDetails';
import UserChangepassword from '../pages/user/UserChangepassword';
import MyConsultantHistory from '../pages/user/MyConsultantHistory';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Navigate to="find-doctor" />} />
                <Route path="find-doctor" element={<Consultation />} />
                <Route path="find-nurse" element={<NurseConsultation />} />
            </Route>
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            {/* userlayout */}
            <Route path="/user/info" element={<UserLayout />}>
                <Route index element={<Navigate to="update-account" />} />
                {/* <Route path="update-account" element={<UpdateAccount />} /> */}
                <Route path="update-account" element={<UserDetails />} />
                <Route path="change-password" element={<UserChangepassword />} />
                <Route path="consultations-history" element={<MyConsultantHistory />} />
                <Route path="prescription" element={<Prescription />} />
                <Route path="orders" element={<Orders />} />
            </Route>

            <Route path="/doctor/login" element={<DoctorLogin />} />
            <Route path="/doctor/signup" element={<DoctorSignup />} />
            <Route path="/medicine/store" element={<MedicineLayout />} />
            <Route path="/doctor/:doctorId" element={<SingleDoctor />}></Route>
            <Route path="/nurses" element={<NurseLayout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<Shipping />} />
            {/* appointment */}
            <Route path="/onsite/appointment" element={<OnsiteAppointmentBooking />} />
        </Routes>
    );
};

export default AppRoutes;