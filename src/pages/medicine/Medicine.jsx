import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'lucide-react';
import { fetchFilterMedicne } from '../../features/medicine/FilterMedicineSlice';
import Medicines from '../../components/medicines/Medicines';
import SkeletonMedicines from '../../components/medicines/SkeletonMedicines';
const Medicine = () => {
    const dispatch = useDispatch();
    const { medicines } = useSelector(state => state.medicines.medicines);
    const { isLoading } = useSelector(state => state.medicines);
    const { search } = useSelector(state => state.filter);

    useEffect(() => {
        dispatch(fetchFilterMedicne({ search }));
    }, [dispatch, search]);

    let content;

    if (medicines?.length === 0) {
        content = (
            <div className="w-full  md:mt-16  flex flex-col items-center justify-center py-12 px-4">
            <div className="bg-gray-50 rounded-full p-6 mb-6">
                <Search className="w-16 h-16 text-violet-500" />
            </div>

            <h3 className="text-xl font-semibold text-violet-500 mb-2">
                No Medicine Found
            </h3>

            <p className="text-gray-500 text-center max-w-sm mb-6">
                We couldnt find any medicine matching your search criteria. Try adjusting your filters or search terms.
            </p>
        </div>
        );
    }

    if (medicines?.length > 0) {
        // content = medicines.map(medicine => <Medicines key={medicine._id} medicine={medicine} />);
          content = (
                     <div className="grid grid-cols-12 gap-4 p-3 lg:p-0 lg:w-3/4 2xl:w-3/4 mx-auto lg:px-0 min-h-[300px]">
                         {medicines.map(medicine => (
                             <Medicines key={medicine._id} medicine={medicine} />
                         ))}
                     </div>
                 );
    }

    return (
        <div className="flex flex-col ">
            <section className="flex-grow pt-12 mb-10 lg:mt-16">
                {isLoading ? (
                    <div className="grid grid-cols-12 gap-4 p-3 lg:p-0 lg:w-3/4 2xl:w-2/4 mx-auto lg:px-0 min-h-[300px]">
                        {/* Show skeleton loaders when loading */}
                        {Array(6).fill().map((_, index) => (
                            <SkeletonMedicines key={index} />
                        ))}
                    </div>
                ) : (
                    <div className="w-full md:w-full lg:w-full">
                        {content}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Medicine;
