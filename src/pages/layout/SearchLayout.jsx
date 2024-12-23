import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsBag, BsSearch, BsClock } from "react-icons/bs";
import { fetchFilterMedicne } from '../../features/medicine/FilterMedicineSlice';
import { addsearchToStore } from '../../features/medicine/searchSlice';
import { searched } from '../../features/filter/filterReducer';

const SearchLayout = () => {
    const dispatch = useDispatch();
    const { search } = useSelector(state => state.filter);
    const [input, setInput] = useState(search);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searched(input));
        dispatch(addsearchToStore(input));
    };

    useEffect(() => {
        dispatch(fetchFilterMedicne({ search }));
    }, [dispatch, search]);
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const { searchList } = useSelector(state => state.searchList);

    return (
        <div className='w-11/12 md:w-3/4 lg:w-3/4 xl:w-7/12 2xl:w-6/12 mx-auto border border-white shadow-md bg-white rounded-md lg:h-84 p-6'>
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
                <h2 className="text-xl font-medium text-gray-900">Search Medicine</h2>
                <div className=" flex items-center justify-between gap-4">
                        <div className="relative w-full">
                            <input
                                className="w-full h-12 pl-4 pr-16 rounded-lg border border-gray-200 outline-none text-gray-700 placeholder-gray-400"
                                type="search"
                                name="search"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Search for medicines..."
                            />
                            <button
                                type="button"
                                onClick={handleSearch}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-lg bg-red-50 hover:bg-red-100 transition-colors duration-200"
                            >
                                <BsSearch className="text-blue-500 w-5 h-5" />
                            </button>
                        </div>
                    <Link
                        to="/cart"
                        className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 hover:bg-red-100 transition-colors duration-200"
                    >
                        <div className="relative">
                            <BsBag className="w-6 h-6 text-blue-500" />
                            {cartTotalQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartTotalQuantity}
                                </span>
                            )}
                        </div>
                    </Link>
                </div>

                <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-700">Search History</h3>
                    {searchList && searchList.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            <div
                                className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full text-sm text-gray-600"
                            >
                                <BsClock className="w-3 h-3 text-red-400" />
                                {searchList}
                            </div>

                        </div>
                    ) : (
                        <p className="text-sm text-gray-400">No recent searches</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchLayout;
