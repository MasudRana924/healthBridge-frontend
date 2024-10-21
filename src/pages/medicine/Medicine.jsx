import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsBag, BsSearch } from "react-icons/bs";
import { Button } from '@mui/material';
import { Rings } from 'react-loader-spinner';
import { fetchFilterMedicne } from '../../features/medicine/FilterMedicineSlice';
import Medicines from '../../components/medicines/Medicines';
import { addsearchToStore } from '../../features/medicine/searchSlice';
import { searched } from '../../features/filter/filterReducer';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const Medicine = () => {
    const dispatch = useDispatch();
    const { medicines } = useSelector(state => state.medicines.medicines);
    const { isLoading } = useSelector(state => state.medicines);
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
    let content;

    if (medicines?.length === 0) {
        content = (
            <div className="col-span-12">
                <div className="alert alert-error shadow-lg text-start mt-5 h-12 w-1/4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-black">No Medicine Found</span>
                </div>
            </div>
        );
    }

    if (medicines?.length > 0) {
        content = medicines.map(medicine => <Medicines key={medicine._id} medicine={medicine} />);
    }

    const Reset = () => {
        window.location.reload();
    };

    const { searchList } = useSelector(state => state.searchList);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <section className="flex-grow pt-12 mb-10 lg:mt-16">
                <div className="flex justify-between pl-2 lg:pl-0 pr-5 mt-3 w-full lg:w-3/4 2xl:w-2/4 mx-auto">
                    <form className="w-3/4 lg:w-2/4 2xl:w-2/4 flex">
                        <input
                            className="outline-none border border-pink-200 w-full h-10 pl-5"
                            type="search"
                            name="search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Search"
                        />
                        <button onClick={handleSearch} className="h-10 w-20" style={{ backgroundColor: "#EB569A", border: '1px solid #EB569A' }}>
                            <BsSearch className="text-white font-bold ml-5" />
                        </button>
                    </form>
                    <div>
                        <Link to="/cart" className="text-sm leading-6 me-10">
                            <div className="flex mt-3 lg:mt-1">
                                <BsBag className="h-4 w-4 lg:h-6 lg:w-6" style={{ color: "#EB569A" }} />
                                <span className="ml-1 text-sm" style={{ color: "#EB569A" }}>{cartTotalQuantity}</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="lg:w-3/4 mx-auto">
                    <p className="text-start">Search History</p>
                    <p className="text-start text-gray-400 min-w-fit">{searchList}</p>
                </div>

                <div className="w-1/4 lg:hidden">
                    <Button variant="outlined" size="small" className="h-6" onClick={Reset}>
                        Reset
                    </Button>
                </div>

                {isLoading ? (
                    <div className="w-2/4 lg:w-1/4 mx-auto flex mt-10">
                        <Rings height={40} width={40} color="red" visible={true} secondaryColor="green" className="border" />
                        <p className="ml-1 mt-2 text-gray-900">please wait a sec</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-12 gap-4 p-3 lg:p-0 lg:w-3/4 2xl:w-2/4 mx-auto lg:px-0 min-h-[300px] mt-10 md:mt-16 lg:mt-12">
                        {content}
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
};

export default Medicine;
