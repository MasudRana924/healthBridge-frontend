import { useState, useEffect } from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../features/user/updateprofile/updateProfileSlice';
// import { fetchtuserDetails } from '../../features/user/details/userDetailsSlice';
const UserDetails = () => {
    const { loggeduser } = useSelector((state) => state.userDetails);
    const user = loggeduser.user;
    const userToken = loggeduser.token;
    const dispatch = useDispatch();

    // Initialize state with user details
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        phone: '',
        birthdate: '',
        avatar: null,
        avatarPreview: '/Profile.png',
    });

    // Populate state with user details on component mount
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                gender: user.gender || '',
                phone: user.phone || '',
                birthdate: user.birthdate || '',
                avatar: null,
                avatarPreview: user.avatar?.url || '/Profile.png',
            });
        }
    }, [user]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle avatar file upload
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setFormData((prevData) => ({
                    ...prevData,
                    avatarPreview: reader.result,
                    avatar: file,
                }));
            }
        };

        if (file) reader.readAsDataURL(file);
    };

    // Submit updated profile
    const handleUpdate = (e) => {
        e.preventDefault();
        const { name, email, gender, phone, avatar } = formData;
        const updatedData = { name, email, gender, phone, avatar };

        dispatch(updateProfile({ data: updatedData, userToken }));
        message.success('Your Info Updated Successfully');
    };


    return (
        <div className=" bg-white  mb-20">
            <div className="w-full ">
                <div className="w-full">
                    <form onSubmit={handleUpdate}>
                        <div className="w-full lg:w-full lg:m-0">
                            {/* Avatar */}
                            <div className="w-1/4 mx-auto">
                                <div >
                                    <img src={formData.avatarPreview} alt="Avatar Preview" className="w-32 rounded-full" />
                                </div>
                                <input
                                    type="file"
                                    name="avatar"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                />
                            </div>

                            {/* Name */}
                            <div className="w-3/4 mx-auto mt-5">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Email */}
                            <div className="w-3/4 mx-auto mt-5">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Gender */}
                            <div className="w-3/4 mx-auto mt-5">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                    Gender
                                </label>
                                <input
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    value={formData.gender}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Phone */}
                            <div className="w-3/4 mx-auto mt-5">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Birthdate */}
                            <div className="w-3/4 mx-auto mt-5">
                                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                                    Birthdate
                                </label>
                                <input
                                    type="date"
                                    id="birthdate"
                                    name="birthdate"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    value={formData.birthdate}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Update Button */}
                            <div className='w-3/4 mx-auto'>
                            <button
                                type="submit"
                                className=" w-full mt-10 bg-violet-500 hover:bg-violet-700 text-white border-none py-2 px-4 rounded-md"
                            >
                                Update
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;