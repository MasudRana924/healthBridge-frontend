import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { message } from "antd";
import { useDispatch } from 'react-redux';
import { addToCart, getTotals } from '../../features/medicine/cartSlice';
import { Heart, Plus, Star } from 'lucide-react';

const Medicines = ({ medicine }) => {
    const dispatch = useDispatch();
    
    const handleCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals());
        message.success("Medicine added to cart");
    };

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 mt-4">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative">
                    {/* Discount Badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm z-20">
                        5% OFF
                    </div>
                    
                    {/* Wishlist Button */}
                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-200 z-20">
                        <Heart className="w-4 h-4 text-gray-500 hover:text-violet-500 transition-colors" />
                    </button>
                    
                    {/* Image Container */}
                    <Link to={`/medicine/${medicine._id}`}>
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={medicine.image.url}
                                className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-300"
                                alt={medicine.name}
                            />
                        </div>
                    </Link>
                </div>

                <div className="p-5">
                    <span className="inline-block bg-blue-50 text-violet-600 text-xs font-medium px-2.5 py-1 rounded-full">
                        {medicine.type}
                    </span>
                    
                    <Link to={`/medicine/${medicine._id}`}>
                        <h3 className="mt-3 text-gray-900 font-semibold text-sm hover:text-violet-600 transition-colors">
                            {medicine.name}
                        </h3>
                    </Link>
                    
                    <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        <span className="text-xs text-gray-500 ml-2">(24 reviews)</span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="text-gray-900 font-bold">
                            ৳{medicine.price}
                            <span className="text-xs text-gray-500 font-normal ml-1">/ unit</span>
                        </div>
                        
                        {medicine?.quantity > 0 && (
                            <button
                                onClick={() => handleCart(medicine)}
                                className="flex items-center gap-1 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5"
                            >
                                <Plus className="w-4 h-4" />
                                Add
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Medicines.propTypes = {
    medicine: PropTypes.object.isRequired
};

export default Medicines;