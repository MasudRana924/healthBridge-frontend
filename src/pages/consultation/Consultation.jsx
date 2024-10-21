import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Filters from './Filters';
import { Rings } from 'react-loader-spinner';
import Consultations from '../../components/consultations/Consultations';
import { fetchCategory } from '../../features/category/categorySlice';
const Consultation = () => {
    const dispatch = useDispatch();
    const { categories, } = useSelector(state => state.categories.categories);
    const { isLoading } = useSelector(state => state.categories);
    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch])
    let content;

    if (!isLoading && categories) {
        content = categories?.map((category) => <Consultations key={category._id} title={category.title} image={category.image}></Consultations>)
    }
    return (
        <div className="">
            <p className="text-start text-xl lg:text-xl 2xl:text-2xl text-gray-900 font-bold mt-4 ">Please select a speaciality</p>
            {
                isLoading ? <div className="w-2/4 lg:w-1/4 mx-auto flex mt-10">

                    <Rings
                        height={40}
                        width={40}
                        color="red"
                        visible={true}
                        secondaryColor="green"
                        className="border"

                    />
                    <p className="ml-1 mt-2 text-gray-900">please wait a sec</p>
                </div> : <div className="grid grid-cols-12 gap-2 m-3 md:m-0 lg:m-0  lg:w-full 2xl:w-full mx-auto lg:mt-8">
                    {content}
                </div>
            }
        </div>
    );
};
export default Consultation;