import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Donate = () => {
  const [donate, setDonate] = useState({});
  const { image, title, description, price } = donate;
  const handleDonation = () => {
    const addedDonation = [];
    const donationsItem = JSON.parse(localStorage.getItem("donations"));
    if (!donationsItem) {
      addedDonation.push(donate);
      localStorage.setItem("donations", JSON.stringify(addedDonation));
      swal("Good job!", "You Donation SuccessFully", "success");
    } else {
        const isExits = donationsItem.find(donate => donate.id === id)
        if(!isExits){
            addedDonation.push(...donationsItem, donate);
            localStorage.setItem("donations", JSON.stringify(addedDonation));
            swal("Good job!", "You Donation SuccessFully", "success");
        }else{
            swal("Error!", "You clicked the button!", "error");
        }
    }
  };
  const { id } = useParams();

  const donates = useLoaderData();

  useEffect(() => {
    const findDonate = donates?.find((donate) => donate.id === id);
    setDonate(findDonate);
  }, [id, donates]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative flex w-7/12 flex-col rounded-xl mt-60 bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="">
          <div className="relative z-0  m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img className=" h-[75vh] " src={image} alt="ui/ux review check" />
          </div>
          <div className="bg-[#12121266] pt-28 ">
            <button
              onClick={handleDonation}
              className="bg-[#FF444A] px-7 font-bold text-white py-4 rounded-lg relative -top-20 left-5 z-auto"
            >
              {price}
            </button>
          </div>
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mt-3 block font-sans  font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
