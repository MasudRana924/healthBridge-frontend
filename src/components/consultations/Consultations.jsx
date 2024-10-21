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
        <div className="col-span-12 md:col-span-3 lg:col-span-3 ">
            <div className="flex items-center w-40 h-20 card shadow-xl hover:bg-gray-200"  onClick={handleSelect}>
                <img src={image?.url} alt="" className="h-12 w-12 border rounded-full m-2" />
                    <p
                        className="lg:text-sm font-bold text-start bg-base-100 "
                        style={{color:'#EB569A'}}
                       
                    >
                        {title}
                    </p>
            </div>
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
