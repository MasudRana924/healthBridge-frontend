import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import imgAvatar from '../../assets/avatar.png'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const DoctorsLists = ({ doctor }) => {
    const { name, work, expert, degree, fees, avatar, isActive, experience, ratings } = doctor;

    return (
        <Link to={`/doctor/${doctor._id}`} >
            <div className="mt-5 border bg-white rounded-lg p-4">
                <div className="w-full  mb-5 ">

                    {
                        avatar?.url ? <img
                            src={avatar.url || <Skeleton />}
                            className=" w-full h-36"
                            alt={name}
                        /> : <img
                            src={imgAvatar}
                            className=" w-full h-36"
                            alt={name}
                        />
                    }
                </div>
                <div className="w-full text-start">
                    <div className="flex mt-3">
                        <p className="font-semibold"> {name || <Skeleton />} </p>

                        {
                            isActive === true ? <button className="  bg-green-500 h-6 w-12 border rounded-lg text-white ml-3 mt-1 border-green-500">online</button> : null
                        }
                    </div>
                    <p className="text-slate-600  text-md " >
                        {degree || <Skeleton />}
                    </p>
                    <div className='flex justify-between'>
                    <div>
                        <p className="text-slate-400  text-md mt-3" >
                            Specialities
                        </p>
                        <p className=" text-md " >
                            {expert || <Skeleton />}
                        </p>
                    </div>
                    <div>
                        <p className="text-slate-400  text-md mt-3" >
                            Specialities
                        </p>
                        <p className=" text-md " >
                            {expert || <Skeleton />}
                        </p>
                    </div>
                    </div>

                </div>

                <div className="text-start mt-5 mb-5 ">
                    <p className="text-slate-600  text-md font-semibold" >
                        Works at {work || <Skeleton />}
                    </p>

                    {/* <p className="text-slate-600  text-md font-semibold mt-2" >
                    ({numOfReviews}) Reviews
                </p> */}
                    <div className="flex justify-between ">
                        <div>
                            <p className="text-slate-400  text-md mt-3" >
                                Experience
                            </p>
                            <p className=" text-md text-black" >
                                {experience || <Skeleton />} Years
                            </p>
                        </div>
                        <div>
                            <p className="text-slate-400  text-md mt-3" >
                                Total Ratings
                            </p>
                            <p className=" text-md " >
                                {ratings}
                            </p>
                        </div>
                    </div>
                    <p className="text-slate-600  text-md font-semibold flex gap-2 mt-2" >
                        < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{fees || <Skeleton />} BDT
                    </p>

                </div>

            </div>
        </Link>
    );
};
DoctorsLists.propTypes = {
    doctor: PropTypes.string.isRequired
};
export default DoctorsLists;