// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch, useSelector } from 'react-redux';
// import Alert from '@mui/material/Alert';
// import TextField from '@mui/material/TextField';
// import EmailIcon from '@mui/icons-material/Email';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import { InputAdornment } from '@mui/material';
// import { createLogin } from '../../features/user/Login/loginSlice.js';
// import { Navbar } from '../../components/common/Navbar.jsx';
// import Footer from '../../components/common/Footer.jsx';
// import {message } from 'antd';
// const Login = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { error, loggeduser, isLoading } = useSelector(
//         (state) => state.userDetails
//     );
//     const user = loggeduser.user
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const registerSubmit = (e) => {
//         e.preventDefault();
//         const myForm = new FormData();
//         myForm.set("email", email);
//         myForm.set("password", password);
//         dispatch(createLogin(myForm));
//     };

//     useEffect(() => {
//         if (user) {
//             navigate('/');
//             message.success("User logged in successfully ")
//         }
//     }, [user, navigate,]);
//     return (
//         <div>
//             <Navbar/>
//             <div className=" flex flex-col items-center justify-center mt-24 lg:mt-52 mb-20  ">
//                 <div className="lg:w-5/12 2xl:w-3/12 border border-white rounded-lg shadow-xl">
//                     <div className=" p-8">
//                         <h2 className="text-start text-2xl font-semibold leading-6 text-gray-900">Welcome to Login</h2>
//                         {
//                             error ? <Alert severity="error" className="mt-5">{error}</Alert> : null
//                         }
//                         <form action="" className="space-y-6 py-6 mt-6" onSubmit={registerSubmit}>
//                             <TextField
//                                 id="input-with-icon-textfield"
//                                 label="Email"
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position="start">
//                                             <EmailIcon />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                                 variant="outlined"
//                                 className="w-full py-3 px-6"
//                                 value={email} onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <TextField
//                                 id="input-with-icon-textfield"
//                                 label="Password"
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position="start">
//                                             <LockOpenIcon />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                                 variant="outlined"
//                                 className="w-full py-3 px-6"
//                                 value={password} onChange={(e) => setPassword(e.target.value)}
//                             />

//                             <div className="lg:flex justify-between">
//                                 <div className="mt-5 text-start">
//                                     <span className="text-sm tracking-wide text-gray-400 text-start">Are you a Doctor ?</span> <Link to="/doctor/login"> <span className="text-sm font-semibold leading-6 text-gary-900"  >Login as a doctor</span>
//                                     </Link>
//                                 </div>
//                                 <div className="mt-5">
//                                     <Link to="/user/password">
//                                         <span className="text-start  text-sm  text-blue-700 mt-10">Forgot password ?</span>

//                                     </Link>
//                                 </div>
//                             </div>
//                             <div>
//                                 {
//                                     isLoading ? <button className=" h-12 w-full mb-5 border rounded-lg text-white " style={{backgroundColor:"#EB569A"}}>
//                                         Please wait ...
//                                     </button> : <button className=" h-12 w-full mb-5 border rounded-lg" style={{backgroundColor:"#EB569A", border:'1px solid #EB569A'}}>
//                                         <span className="font-semibold text-white text-lg">Login</span>
//                                     </button>
//                                 }
//                                 <span className="text-sm tracking-wide text-gray-400 mt-5">Dont have any account ?</span> <Link to="/user-signup"> <span className="text-sm font-semibold leading-6 text-gray-900"  >Create new account</span>
//                                 </Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//     );
// };
// export default Login;
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, TextField, InputAdornment } from '@mui/material';
import { Mail, LockOpen } from 'lucide-react';
import { FaGoogle } from "react-icons/fa";
import { createLogin } from '../../features/user/Login/loginSlice.js';
import { Navbar } from '../../components/common/Navbar.jsx';
import Footer from '../../components/common/Footer.jsx';
import { message } from 'antd';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, loggeduser, isLoading } = useSelector((state) => state.userDetails);
    const user = loggeduser.user;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email", email);
        myForm.set("password", password);
        dispatch(createLogin(myForm));
    };

    useEffect(() => {
        if (user) {
            navigate('/');
            message.success("User logged in successfully");
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex min-h-[calc(100vh-64px)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
                    <div>
                        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Please sign in to continue
                        </p>
                    </div>

                    {error && <Alert severity="error" className="mt-5">{error}</Alert>}

                    <button
                        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-green-700 font-semibold py-3 px-4 border border-gray-300 rounded-lg shadow-sm transition duration-150"
                    >
                        <FaGoogle  className="w-5 h-5" />
                        Sign in with Google
                    </button>

                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-4 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <form className="mt-6 space-y-6" onSubmit={registerSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Mail className="h-5 w-5" />
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
                                        <LockOpen className="h-5 w-5" />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link to="/doctor/login" className="font-medium text-violet-600 hover:text-violet-500">
                                    Login as a doctor
                                </Link>
                            </div>
                            <div className="text-sm">
                                <Link to="/user/password" className="font-medium text-violet-600 hover:text-violet-500">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition duration-150"
                        >
                            {isLoading ? "Please wait..." : "Sign in"}
                        </button>

                        <div className="text-center text-sm">
                            <span className="text-gray-500">Dont have an account?</span>
                            {' '}
                            <Link to="/user/register" className="font-medium text-violet-600 hover:text-violet-500">
                                Create new account
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;