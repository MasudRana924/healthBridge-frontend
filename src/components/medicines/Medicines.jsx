import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { message } from "antd";
import { useDispatch } from 'react-redux';
import { addToCart, getTotals } from '../../features/medicine/cartSlice';
import { Heart } from 'lucide-react'; // Import the Heart icon from Lucide

const Medicines = ({ medicine }) => {
    const dispatch = useDispatch();

    const handleCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals());
        message.success("Medicine added to cart");
    };

    return (
        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4">
            <div className="w-full flex flex-col bg-white border rounded-lg relative"> {/* Added relative here */}
                <div className="absolute top-2 left-2 bg-red-600 text-white text-sm py-1 px-3 rounded-md z-10">
                    5% OFF
                </div>
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 text-gray-500 z-10">
                    <Heart className="text-xl cursor-pointer" />
                </div>

                <div className="relative">
                    <Link>
                        <img
                            src={medicine.image.url}
                            className="w-full h-48 p-4"
                            alt={medicine.name}
                        />
                    </Link>
                </div>

                <div className="lg:block md:block text-start p-5">
                    <p className="text-slate-400 text-sm font-sm">{medicine.type}</p>
                    <Link to={`/medicine/${medicine._id}`}>
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-2">
                            {medicine.name}
                        </p>
                    </Link>

                    <div className="flex justify-between gap-2 items-center">
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-2">
                            Price {medicine.price}Tk
                        </p>

                        {/* Add to Cart button */}
                        {medicine?.quantity > 0 && (
                            <button
                                className="text-sm h-8 border rounded-lg p-1 text-white"
                                style={{ backgroundColor: "red", border: '1px solid red' }}
                                onClick={() => handleCart(medicine)}
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Medicines.propTypes = {
    medicine: PropTypes.object.isRequired, // Updated to object instead of string for the medicine prop
};

export default Medicines;
