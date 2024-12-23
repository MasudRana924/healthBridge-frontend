import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MapPin, Star, Clock, Heart } from 'lucide-react';

const Nurse = ({nurse}) => {
    const { name, fees, images } = nurse;

    return (
        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative">
                    {/* Wishlist Button */}
                    <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-200 z-10">
                        <Heart className="w-4 h-4 text-gray-500 hover:text-blue-500 transition-colors" />
                    </button>

                    {/* Experience Badge */}
                    <div className="absolute top-3 left-3 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm z-10">
                        5+ Years
                    </div>

                    <Link to={`/nurse/${nurse._id}`}>
                        <div className="relative h-64 overflow-hidden bg-gray-100">
                            <img
                                src={images[0].url}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                alt={name}
                            />
                        </div>
                    </Link>
                </div>

                <div className="p-5 space-y-4">
                    <Link to={`/nurse/${nurse._id}`}>
                        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                            {name}
                        </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">(48 reviews)</span>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <Clock className="w-5 h-5 text-blue-500" />
                            <div>
                                <p className="text-xs text-gray-500">Available</p>
                                <p className="text-sm font-medium">24/7</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <FaRegMoneyBillAlt className="w-5 h-5 text-green-500" />
                            <div>
                                <p className="text-xs text-gray-500">Fees</p>
                                <p className="text-sm font-medium">{fees} BDT</p>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Dhaka Medical, BD</span>
                    </div>

                    {/* Book Now Button */}
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

Nurse.propTypes = {
    nurse: PropTypes.object.isRequired
};

export default Nurse;