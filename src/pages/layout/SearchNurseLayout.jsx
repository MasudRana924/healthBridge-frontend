import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFilterNurses } from '../../features/nurses/nursesSlices';
import { FiSearch, FiMapPin } from 'react-icons/fi'; // Importing icons

const locations = ["Uttara", "Dhanmondi", "Mirpur", "Banani", "Gulshan"];

const SearchNurseLayout = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState("");
    const [search, setSearch] = useState(""); // State for search input

    useEffect(() => {
        dispatch(fetchFilterNurses({ location }));
    }, [dispatch, location]);

    const handleSearch = () => {
        if (search.trim()) {
            dispatch(fetchFilterNurses({ search })); // Dispatching search query
        }
    };

    return (
        <div className="w-11/12 md:w-3/4 lg:w-3/4 xl:w-7/12 2xl:w-6/12 mx-auto border border-gray-300 shadow-md bg-white rounded-md p-6">
            <p className="text-lg font-medium text-gray-900 mb-2">Search Nurses</p>
            <hr />

            {/* Search Input with Button */}
            <div className="mt-4 flex items-center border border-gray-300 rounded-md p-1">
                <input
                    type="text"
                    placeholder="Search by name or specialty"
                    className="flex-grow px-4 py-2 text-sm text-gray-700 outline-none rounded-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                >
                    <FiSearch className="mr-2" />
                    Search
                </button>
            </div>

            {/* Location Buttons */}
            <div className="flex flex-wrap justify-between mt-5">
                {locations.map((loc) => (
                    <button
                        className="flex items-center w-full md:w-auto px-4 py-2 mt-3 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-semibold text-gray-700 transition"
                        key={loc}
                        onClick={() => setLocation(loc)}
                        style={{ margin: "5px" }} // Margin around each button
                    >
                        <FiMapPin className="mr-2 text-blue-600" />
                        {loc}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchNurseLayout;
