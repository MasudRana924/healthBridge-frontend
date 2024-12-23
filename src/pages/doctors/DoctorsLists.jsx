import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Award, Users } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import imgAvatar from '../../assets/avatar.png';
import 'react-loading-skeleton/dist/skeleton.css';

const DoctorsLists = ({ doctor }) => {
  const { name, work, expert, degree, fees, avatar, isActive, experience, ratings } = doctor;

  return (
    <Link to={`/doctor/${doctor._id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative">
          <div className="h-48 overflow-hidden">
            {avatar?.url ? (
              <img
                src={avatar.url || <Skeleton />}
                className="w-full h-full object-cover"
                alt={name}
              />
            ) : (
              <img
                src={imgAvatar}
                className="w-full h-full object-cover"
                alt={name}
              />
            )}
          </div>
          
          {isActive && (
            <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              Available Now
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">
              {name || <Skeleton />}
            </h3>
            <p className="text-sm text-gray-600">
              {degree || <Skeleton />}
            </p>
            <span className="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
              {expert || <Skeleton />}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-4 text-gray-600">
            <MapPin className="w-4 h-4 text-blue-600" />
            <p className="text-sm">{work || <Skeleton />}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Award className="w-5 h-5 mx-auto text-blue-600 mb-1" />
              <p className="text-xs text-gray-600">Experience</p>
              <p className="font-medium">{experience} Years</p>
            </div>
            
            <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Users className="w-5 h-5 mx-auto text-blue-600 mb-1" />
              <p className="text-xs text-gray-600">Ratings</p>
              <p className="font-medium">{ratings}</p>
            </div>
            
            <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Clock className="w-5 h-5 mx-auto text-blue-600 mb-1" />
              <p className="text-xs text-gray-600">Fees</p>
              <p className="font-medium">${fees}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

DoctorsLists.propTypes = {
  doctor: PropTypes.object.isRequired
};

export default DoctorsLists;