
import { useDispatch, useSelector } from 'react-redux';
// import Loading from '../loader/Loading';
// import DoctorsList from './DoctorsList';
import { useEffect } from 'react';
// import { fetchFilterDoctors } from '../../state/filter/filterSlice';
import FilterFeeses from './FilterFeeses';
// import GendersLists from '../DoctorsList/GendersLists';
import Ratings from './Ratings';
// import { BsFilterRight } from "react-icons/bs";
// import { RxCross1 } from "react-icons/rx";
import FilterStatus from './FilterStatus';
import { Alert } from '@mui/material';
import { fetchFilterDoctors } from '../../features/filter/filterSlice';
import GendersLists from './GendersLists';
import DoctorsLists from './DoctorsLists';

const DoctorsList = () => {
    const dispatch = useDispatch();
    const { doctors, isLoading, isError, error } = useSelector(state => state.filterDoctors.filterDoctors);
    const { experts, fees, genders, ratingss, search, status } = useSelector(state => state.filter)
    useEffect(() => {
        dispatch(fetchFilterDoctors({ experts, fees, genders, ratingss, search, status }));
    }, [dispatch, experts, fees, genders, ratingss, search, status]);
    let content;
    if (isLoading && doctors?.length < 0) content = <p>Loading...</p>;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !doctors) {
        content = <p>Loading...</p>
    }
    if (!isLoading && !isError && doctors?.length === 0) {
        content = <div className="w-full p-5 lg:p-0 lg:w-1/4 lg:mt-24">
            <Alert severity="error" >No Doctors Found</Alert>
        </div>
    }
    if (!isLoading && !isError && doctors?.length > 0) {
        content = doctors?.map(doctor => <DoctorsLists key={doctor._id} doctor={doctor} />)
    }

    return (
        <div className="lg:flex justify-between 2xl:w-3/4 mx-auto gap-4  mb-20 border mt-16">
            <div className="hidden lg:block lg:w-1/4">
                <div className=" lg:w-3/4 mx-auto lg:ml-12 2xl:ml-14">
                    <FilterStatus></FilterStatus>
                </div>
                <div className="w-3/4 mx-auto ">
                    <div className=" w-full lg:w-3/4 lg:mx-auto mt-5">
                        <h2 className="font-semibold text-xl mt-1 text-start ">Gender</h2>
                    </div>
                    <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">
                        <GendersLists></GendersLists>
                    </div>
                </div>
                <div className="w-3/4 mx-auto ">
                    <div className=" w-full lg:w-3/4 lg:mx-auto mt-5">
                        <h2 className="font-semibold text-xl mt-1 text-start "> Fees</h2>
                    </div>
                    <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">
                        <FilterFeeses></FilterFeeses>
                    </div>
                </div>
                <div className="w-3/4 mx-auto ">
                    <div className=" w-full lg:w-3/4 lg:mx-auto mt-5">
                        <h2 className="font-semibold text-xl mt-1 text-start ">Ratings</h2>
                    </div>
                    <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">
                        <Ratings></Ratings>
                    </div>
                </div>
            </div>
            {/* for small devices */}



            <div className="w-full md:w-full lg:w-full  lg:ml-16">
                {
                    content
                }
            </div>
        </div>
    );
};

export default DoctorsList;