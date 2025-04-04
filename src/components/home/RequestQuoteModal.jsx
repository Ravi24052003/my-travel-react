import React, { useEffect, useState } from "react";
import api from "../../api";
import destinationOptions from "./destinationOptions";
import { useDispatch, useSelector } from "react-redux";
import { publicStoreGeneralLeadAsync, setIsLeadCreated } from "../../features/public/publicSlice";
import animatedLoader from "/Images/animated_images/loader.svg";

const RequestQuoteModal = ({isRequestQuoteModalOpen, handleRequestQuoteCloseModal,}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.public.leadIsLoading);

  const isLeadCreated = useSelector(state => state.public.isLeadCreated);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selected_destination: "",
    date_of_arrival: "",
  });

  const [tripPlannerFlashMessage, setTripPlannerFlashMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const registerBody = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      selected_destination: formData.selected_destination,
      date_of_arrival: formData.date_of_arrival,
    };

    dispatch(publicStoreGeneralLeadAsync(registerBody));
    
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  useEffect(()=>{
  if(isLeadCreated){
   dispatch(setIsLeadCreated());

        setTripPlannerFlashMessage(
          "Form submitted successfully you will be contacted soon"
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          selected_destination: "",
          date_of_arrival: ""
        });

  }
  }, [isLeadCreated]);





  useEffect(() => {
    if (tripPlannerFlashMessage) {
      setTimeout(() => {
        setTripPlannerFlashMessage("");
      }, 5000);
    }
  }, [tripPlannerFlashMessage]);

  return (
    <div>

      {isRequestQuoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-2 rounded-lg shadow-lg w-[400px] max-[600]:w-[320px] max-[400px]:w-[280px] relative px-4 pb-4">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-4xl -m-2"
              onClick={handleRequestQuoteCloseModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-center text-blue-900">
              Plan Your Trip
            </h2>

            <div
              className={`bg-white rounded ${
                tripPlannerFlashMessage ? "block" : "hidden"
              }`}
            >
              <h1 className=" text-center text-green-500 font-bold text-sm">
                {tripPlannerFlashMessage}
              </h1>
            </div>

            <form className="space-y-4" onSubmit={(e)=>handleFormSubmit(e)}>

              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
              name="selected_destination"
              value={formData.selected_destination}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
              <option value="" disabled>
              Select Destination
              </option>

              {destinationOptions.map((option) =>(
              <option value={option?.value}>{option?.label}</option>
              ) )}

              </select>

              
              <div className=" my-5">
                <label htmlFor="date_of_arrival">Date Of Arrival</label>
              <input
              id="date_of_arrival"
                type="date"
                placeholder="Date Of Arrival"
                name="date_of_arrival"
                value={formData.date_of_arrival}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              </div>
           

              <button
              disabled={isLoading}
                type="submit"
                className="w-full p-3 text-white bg-blue-900 rounded-lg hover:opacity-90 transition"
              >
              {
                isLoading? <div className=" flex justify-center">
                <img src={animatedLoader} alt="" />

                </div>
                :

               <span>Submit</span>
              }  
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestQuoteModal;
