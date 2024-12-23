// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Navbar } from '../../components/common/Navbar.jsx';
// import { message } from 'antd';
// import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import EmailIcon from '@mui/icons-material/Email';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import { InputAdornment } from '@mui/material';
// import { FaCamera } from 'react-icons/fa';
// import { createSignUp } from '../../features/user/signupSlice';
// import Footer from '../../components/common/Footer.jsx';
// import './Auth.css'; // Custom CSS for the component

// const Register = () => {
//     const dispatch = useDispatch();
//     const { success, isLoading } = useSelector((state) => state.signup);
//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [avatar, setAvatar] = useState('/Profile.png');
//     const [avatarPreview, setAvatarPreview] = useState('/Profile.png');

//     const registerSubmit = (e) => {
//         e.preventDefault();
//         const myForm = new FormData();
//         myForm.set('name', name);
//         myForm.set('email', email);
//         myForm.set('password', password);
//         myForm.set('avatar', avatar);
//         dispatch(createSignUp(myForm));
//     };

//     const registerDataChange = (e) => {
//         const reader = new FileReader();
//         reader.onload = () => {
//             if (reader.readyState === 2) {
//                 setAvatarPreview(reader.result);
//                 setAvatar(reader.result);
//             }
//         };
//         reader.readAsDataURL(e.target.files[0]);
//     };

//     useEffect(() => {
//         if (success) {
//             navigate('/user/login');
//             message.success('User account successfully created');
//         }
//     }, [success, navigate]);

//     return (
//         <div>
//             <Navbar />
//             <div className="flex flex-col items-center justify-center mt-16 lg:mt-44 mb-8">
//                 <div className="p-5 lg:w-4/12 2xl:w-3/12 border border-white rounded-lg shadow-xl">
//                     <h2 className="text-start text-2xl font-semibold leading-6 text-gray-900">Welcome to Register</h2>
//                     <form action="" className="space-y-6 py-6" onSubmit={registerSubmit}>
//                         {/* Avatar Section */}
//                         <div className="avatar-container">
//                             <img
//                                 src={avatarPreview}
//                                 alt="Avatar Preview"
//                                 className="avatar-preview"
//                             />
//                             <label htmlFor="avatar-upload" className="avatar-upload-icon">
//                                 <FaCamera className="camera-icon" />
//                                 <input
//                                     type="file"
//                                     id="avatar-upload"
//                                     name="avatar"
//                                     accept="image/*"
//                                     onChange={registerDataChange}
//                                     className="hidden"
//                                 />
//                             </label>
//                         </div>

//                         {/* Form Fields */}
//                         <TextField
//                             id="input-with-icon-textfield"
//                             label="Name"
//                             InputProps={{
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         <AccountCircle />
//                                     </InputAdornment>
//                                 ),
//                             }}
//                             variant="outlined"
//                             className="w-full py-3 px-6"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                         <TextField
//                             id="input-with-icon-textfield"
//                             label="Email"
//                             InputProps={{
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         <EmailIcon />
//                                     </InputAdornment>
//                                 ),
//                             }}
//                             variant="outlined"
//                             className="w-full py-3 px-6"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <TextField
//                             id="input-with-icon-textfield"
//                             label="Password"
//                             InputProps={{
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         <LockOpenIcon />
//                                     </InputAdornment>
//                                 ),
//                             }}
//                             variant="outlined"
//                             className="w-full py-3 px-6"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />

//                         {/* Submit Button */}
//                         <div>
//                             {isLoading ? (
//                                 <button
//                                     className="h-12 w-full mb-5 border rounded-lg text-white"
//                                     style={{ backgroundColor: '#EB569A' }}
//                                 >
//                                     Please wait ..
//                                 </button>
//                             ) : (
//                                 <button
//                                     className="h-12 w-full mb-5 border rounded-lg"
//                                     style={{ backgroundColor: '#EB569A', border: '1px solid #EB569A' }}
//                                 >
//                                     <span className="font-semibold text-white text-lg">Register</span>
//                                 </button>
//                             )}
//                             <span className="text-sm tracking-wide text-gray-400 mt-5">Already have an account?</span>{' '}
//                             <Link to="/user/login">
//                                 <span className="text-sm  leading-6 text-blue-400">Please Login</span>
//                             </Link>
//                         </div>
//                         <div >
//                             <Link to="/doctor/signup">
//                                 <p className="text-sm font-semibold leading-6 text-violet-500 text-center ">Login as Doctor</p>
//                             </Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Register;
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, InputAdornment } from '@mui/material';
import { Mail, Lock, User, Camera } from 'lucide-react';
import { createSignUp } from '../../features/user/signupSlice';
import { Navbar } from '../../components/common/Navbar.jsx';
import Footer from '../../components/common/Footer.jsx';
import { message } from 'antd';

const Register = () => {
    const dispatch = useDispatch();
    const { success, isLoading } = useSelector((state) => state.signup);
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('/Profile.png');
    const [avatarPreview, setAvatarPreview] = useState('/Profile.png');

    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set('name', name);
        myForm.set('email', email);
        myForm.set('password', password);
        myForm.set('avatar', avatar);
        dispatch(createSignUp(myForm));
    };

    const registerDataChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        if (success) {
            navigate('/user/login');
            message.success('User account successfully created');
        }
    }, [success, navigate]);

    return (
        <div className="min-h-screen bg-gray-50 mt-16">
            <Navbar />
            <div className="flex min-h-[calc(100vh-64px)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
                    <div>
                        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                            Create your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Join us today and start your journey
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={registerSubmit}>
                        <div className="flex justify-center">
                            <div className="relative group">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src={avatarPreview}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <label className="absolute bottom-0 right-0 bg-violet-500 p-2 rounded-full cursor-pointer shadow-lg hover:bg-violet-600 transition-colors">
                                    <Camera className="h-4 w-4 text-white" />
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={registerDataChange}
                                        accept="image/*"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Email Address"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors"
                        >
                            {isLoading ? "Creating account..." : "Sign up"}
                        </button>

                        <div className="space-y-4">
                            <div className="text-center text-sm">
                                <span className="text-gray-500">Already have an account?</span>
                                {' '}
                                <Link to="/user/login" className="font-medium text-violet-600 hover:text-violet-500">
                                    Sign in
                                </Link>
                            </div>
                            
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-4 text-gray-500">Or</span>
                                </div>
                            </div>

                            <Link 
                                to="/doctor/signup"
                                className="block text-center py-3 px-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                            >
                                Register as Doctor
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;