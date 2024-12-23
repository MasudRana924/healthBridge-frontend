import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Droplets, Clock, AlertCircle } from 'lucide-react';

const BloodGroupCard = ({ bloodGroup, isEmergency = false }) => {
  const dispatch = useDispatch();
//   const { selectedBloodGroups } = useSelector(state => state.bloodFilter);

//   const isSelected = selectedBloodGroups.includes(bloodGroup);
let isSelected ;
  const handleSelect = () => {
    if (isSelected) {
      dispatch({ type: 'REMOVE_BLOOD_GROUP', payload: bloodGroup });
    } else {
      dispatch({ type: 'ADD_BLOOD_GROUP', payload: bloodGroup });
    }
  };

  return (
    <div className="col-span-6 sm:col-span-4 md:col-span-3">
      <button
        onClick={handleSelect}
        className={`
          relative w-full transition-all duration-300 ease-in-out
          transform hover:scale-105 hover:shadow-lg
          ${isSelected ? 'bg-red-50 border-2 border-violet-500' : 'bg-white border border-gray-200'}
          flex flex-col items-center gap-1.5
          p-2 sm:p-3
          rounded-lg
          group
        `}
      >
        {/* Blood Icon Container */}
        <div className={`
          w-10 h-10 sm:w-12 sm:h-12 
          rounded-full 
          flex items-center justify-center
          transition-all duration-300
          ${isSelected ? 'bg-red-100' : 'bg-red-50'}
          ${isSelected ? 'ring-2 ring-violet-500 ring-offset-2' : 'ring-1 ring-red-100'}
          group-hover:ring-violet-500
        `}>
          <Droplets 
            className={`
              w-5 h-5 sm:w-6 sm:h-6
              transition-colors duration-300
              ${isSelected ? 'text-violet-500' : 'text-red-400'}
              group-hover:text-violet-500
            `}
          />
        </div>

        {/* Blood Group Text */}
        <span className={`
          font-semibold text-sm sm:text-base transition-colors duration-300
          ${isSelected ? 'text-violet-500' : 'text-gray-700'}
          group-hover:text-violet-500
        `}>
          {bloodGroup}
        </span>

        {/* Emergency Tag */}
        {isEmergency && (
          <div className="absolute -top-1.5 -left-1.5 bg-violet-500 text-white 
                         px-1.5 py-0.5 rounded-md text-xs font-medium
                         flex items-center gap-1 shadow-md">
            <Clock className="w-2.5 h-2.5" />
            <span className="text-[10px] sm:text-xs">Immediate</span>
          </div>
        )}

        {/* Selected Checkmark */}
        {isSelected && (
          <div className="absolute -top-1 -right-1 
                         w-4 h-4 sm:w-5 sm:h-5
                         bg-violet-500 rounded-full 
                         flex items-center justify-center shadow-md">
            <span className="text-white text-[10px] sm:text-xs">✓</span>
          </div>
        )}
      </button>
    </div>
  );
};

const BloodGroupSelector = () => {
  const bloodGroups = [
    { group: 'A+', emergency: true },
    { group: 'A-', emergency: false },
    { group: 'B+', emergency: true },
    { group: 'B-', emergency: false },
    { group: 'O+', emergency: true },
    { group: 'O-', emergency: false },
    { group: 'AB+', emergency: false },
    { group: 'AB-', emergency: true },
  ];

  return (
    <div className="w-11/12 md:w-3/4 lg:w-3/4 xl:w-7/12 2xl:w-6/12 mx-auto border border-white shadow-md bg-white rounded-md lg:h-84 p-6">
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <AlertCircle className="text-violet-500 w-5 h-5" />
        <h2 className="text-lg font-bold text-gray-800">Blood Groups Available</h2>
      </div>

      {/* Horizontal Rule */}
      <hr className="my-4 border-gray-200" />

      {/* Blood Groups Grid */}
      <div className="grid grid-cols-12 gap-3">
        {bloodGroups.map((blood) => (
          <BloodGroupCard
            key={blood.group}
            bloodGroup={blood.group}
            isEmergency={blood.emergency}
          />
        ))}
      </div>
    </div>
  );
};

BloodGroupCard.propTypes = {
  bloodGroup: PropTypes.string.isRequired,
  isEmergency: PropTypes.bool
};

export default BloodGroupSelector;