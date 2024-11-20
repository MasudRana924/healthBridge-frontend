import { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import { RxCross1 } from "react-icons/rx";
// import banner from '../../../images/main.png';
import PropTypes from 'prop-types';
const MyConsultants = ({ consultant }) => {
//   const {
//     doctorname,
//     doctorimage,
//     doctorfees,
//     doctordegree,
//     doctorwork,
//     doctortitle,
//     prescription,
//   } = consultant;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="card col-span-12 md:col-span-3 lg:col-span-6 2xl:col-span-3 gap-2">
      <div ref={componentRef}>
        <div className="flex">
          <div>
            <img
              src={consultant?.doctorimage}
              className="doctor-image m-3 border rounded"
              alt={consultant?.doctorname}
            />
          </div>
          <div className="text-start 2xl:ml-5">
            <p className="text-slate-600 text-md font-semibold mt-3">
              {consultant?.doctortitle} {consultant?.doctorname}
            </p>
            <p className="text-slate-600 text-sm font-semibold mt-3">
              {consultant?.doctordegree}
            </p>
            <p className="text-slate-600 text-sm font-semibold mt-3">
              Fees: {consultant?.doctorfees}
            </p>
          </div>
        </div>
      </div>

      {consultant?.prescription ? (
        <a
          href="#my_modal_8"
          className="bg-green-500 h-10 text-center text-white pt-2 font-semibold"
        >
          See Prescription
        </a>
      ) : null}

      {/* Modal for prescription */}
      <div className="modal" id="my_modal_8">
        <div className="modal-box">
          <div ref={componentRef}>
            <div>
              {/* <img
                src={banner}
                className="w-full h-16"
                alt="Prescription Banner"
              /> */}
            </div>
            <div className="flex justify-between m-10">
              <div>
                <img
                  src={consultant?.doctorimage}
                  className="doctor-image m-3 ml-3 border rounded"
                  alt={consultant?.doctorname}
                />
              </div>
              <div className="text-start">
                <p className="text-slate-600 text-md font-semibold mt-3">
                  {consultant?.doctortitle} {consultant?.doctorname}
                </p>
                <p className="mt-2">{consultant?.doctordegree}</p>
                <p>Works at {consultant?.doctorwork}</p>
              </div>
            </div>
            <div className="text-start ml-10">
              <p className="text-slate-400 text-md font-semibold">Prescription</p>
              <p className="text-gray-900 text-md w-2/4">{consultant?.prescription}</p>
            </div>
          </div>
          <button
            onClick={handlePrint}
            className="print__button btn btn-sm bg-slate-600 border-slate-600 hover:bg-slate-600 hover:border-slate-600 w-1/4 mx-auto mb-5 mt-12"
          >
            Download
          </button>

          <div className="modal-action">
            <a
              href="#"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              <RxCross1 className="text-xl text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
MyConsultants.propTypes = {
    consultant: PropTypes.shape({
      doctorname: PropTypes.string.isRequired,
      doctorimage: PropTypes.string.isRequired,
      doctorfees: PropTypes.number.isRequired,
      doctordegree: PropTypes.string.isRequired,
      doctorwork: PropTypes.string.isRequired,
      doctortitle: PropTypes.string.isRequired,
      prescription: PropTypes.string,
    }).isRequired,
  };
export default MyConsultants;
