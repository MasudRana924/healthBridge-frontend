import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { expertRemoved, expertSelected } from '../../features/filter/filterReducer';

const Consultations = ({ title, image }) => {
    const dispatch = useDispatch();
    const { experts } = useSelector(state => state.filter);

    const isSelected = experts.includes(title);

    const handleSelect = () => {
        if (isSelected) {
            dispatch(expertRemoved(title));
        } else {
            dispatch(expertSelected(title));
        }
    };

    return (
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
    {/* <button
        className="flex items-center md:w-40 md:h-20 card shadow-xl hover:bg-gray-200 p-2"
        onClick={handleSelect}
    >
        <img
            src={image?.url}
            alt=""
            className="h-12 w-12 border rounded-full m-2"
        />
        <p
            className="text-xs md:text-sm lg:text-sm font-bold text-start bg-base-100"
            style={{ color: '#EB569A' }}
        >
            {title}
        </p>
    </button> */}
     <button
      onClick={handleSelect}
      className={`
        relative w-full transition-all duration-300 ease-in-out
        transform hover:scale-105 hover:shadow-lg
        ${isSelected ? 'bg-red-50 border-2 border-violet-500' : 'bg-white border border-gray-200'}
        flex flex-col items-center gap-2
        p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl
        group
      `}
    >
      <div className={`
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
        rounded-full overflow-hidden transition-transform duration-300
        ${isSelected ? 'ring-4 ring-violet-500 ring-offset-2' : 'ring-2 ring-red-100'}
        group-hover:ring-violet-500
      `}>
        <img 
          src={image?.url || '/api/placeholder/64/64'} 
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <span className={`
        font-medium transition-colors duration-300
        text-xs sm:text-sm
        ${isSelected ? 'text-violet-500' : 'text-gray-700'}
        group-hover:text-violet-500
      `}>
        {title}
      </span>
      
      {isSelected && (
        <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 
                      w-5 h-5 sm:w-6 sm:h-6 
                      bg-violet-500 rounded-full 
                      flex items-center justify-center shadow-lg">
          <span className="text-white text-xs sm:text-sm">✓</span>
        </div>
      )}
    </button>
</div>
    );
};

// PropTypes validation
Consultations.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        url: PropTypes.string
    }).isRequired
};

export default Consultations;
