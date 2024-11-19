import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FilterFeeses from './FilterFeeses';
import Ratings from './Ratings';
import FilterStatus from './FilterStatus';
import { Alert } from '@mui/material';
import { fetchFilterDoctors } from '../../features/filter/filterSlice';
import DoctorsLists from './DoctorsLists';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DoctorsList = () => {
    const dispatch = useDispatch();
    const { doctors, isLoading, isError, error } = useSelector(state => state.filterDoctors.filterDoctors);
    const { experts, fees, genders, ratingss, search, status } = useSelector(state => state.filter);
    
    useEffect(() => {
        dispatch(fetchFilterDoctors({ experts, fees, genders, ratingss, search, status }));
    }, [dispatch, experts, fees, genders, ratingss, search, status]);

    let content;

    if (isLoading) {
        // Show skeleton loader when loading
        content = (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {Array(6).map((_, index) => (
                    <div key={index} className="mt-5 border rounded-lg p-4">
                        <div className="w-full mb-5">
                            <Skeleton height={144} />
                        </div>
                        <div className="w-full text-start">
                            <div className="flex mt-3">
                                <Skeleton width={120} height={20} />
                                <div className="ml-3 mt-1">
                                    <Skeleton width={40} height={24} />
                                </div>
                            </div>
                            <p className="text-slate-600 text-md">
                                <Skeleton width={100} />
                            </p>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-slate-400 text-md mt-3">
                                        Specialties
                                    </p>
                                    <p className="text-md">
                                        <Skeleton width={80} />
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-md mt-3">
                                        Specialties
                                    </p>
                                    <p className="text-md">
                                        <Skeleton width={80} />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-start mt-5 mb-5">
                            <p className="text-slate-600 text-md font-semibold">
                                Works at <Skeleton width={80} />
                            </p>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-slate-400 text-md mt-3">
                                        Experience
                                    </p>
                                    <p className="text-md text-black">
                                        <Skeleton width={40} />
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-md mt-3">
                                        Total Ratings
                                    </p>
                                    <p className="text-md">
                                        <Skeleton width={50} />
                                    </p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-md font-semibold flex gap-2 mt-2">
                                <Skeleton width={20} height={20} />
                                <Skeleton width={60} />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    } 
    else if (!isLoading && !isError && doctors?.length === 0) {
        content = (
            <div className="w-full p-5 lg:p-0 lg:w-1/4 lg:mt-24">
                <Alert severity="error">No Doctors Found</Alert>
            </div>
        );
    } else if (!isLoading && !isError && doctors?.length > 0) {
        content = (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {doctors?.map(doctor => (
                    <DoctorsLists key={doctor._id} doctor={doctor} />
                ))}
            </div>
        );
    }

    return (
        <div className="lg:flex lg:w-11/12 justify-between mx-auto gap-4 mb-20 lg:mt-4">
            <div className="hidden lg:w-1/4">
                <div className="lg:w-3/4 mx-auto lg:ml-12 2xl:ml-14">
                    <FilterStatus />
                </div>
                <div className="w-3/4 mx-auto">
                    <div className="w-full lg:w-3/4 lg:mx-auto mt-5">
                        <h2 className="font-semibold text-xl mt-1 text-start">Fees</h2>
                    </div>
                    <div className="hidden lg:block lg:w-3/4 lg:mx-auto">
                        <FilterFeeses />
                    </div>
                </div>
                <div className="w-3/4 mx-auto">
                    <div className="w-full lg:w-3/4 lg:mx-auto mt-5">
                        <h2 className="font-semibold text-xl mt-1 text-start">Ratings</h2>
                    </div>
                    <div className="hidden lg:block lg:w-3/4 lg:mx-auto">
                        <Ratings />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-full xl:ml-16">
                {content}
            </div>
        </div>
    );
};

export default DoctorsList;
