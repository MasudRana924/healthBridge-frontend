import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const UserLayout = () => {
    const sidebarItems = [
        { name: "Update Account", path: "update-account" },
        { name: "Prescription", path: "prescription" },
        { name: "Orders", path: "orders" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-grow lg:w-10/12 mx-auto flex justify-center lg:mt-44 mb-12">
                {/* Left Sidebar */}
                <div className="w-1/4 bg-gray-50 p-4">
                    <h2 className="text-lg font-semibold mb-4">User Account Settings</h2>
                    <ul className="space-y-2">
                        {sidebarItems.map((item, index) => (
                            <li key={index} className="border-b">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded ${
                                            isActive
                                                ? 'bg-violet-500 text-white'
                                                : 'text-gray-900 hover:bg-gray-200'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Content Area */}
                <div className="w-3/4 bg-white p-6">
                    <Outlet />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default UserLayout;
