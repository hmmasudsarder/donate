import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donations, setDonation] = useState([]);
    const [notFound, setNotData] = useState(false);
    const [isShow, setShow] = useState(false);
    useEffect(() => {
        const donationsItem = JSON.parse(localStorage.getItem("donations"));
        if(donationsItem){
            setDonation(donationsItem)
        }else{
            setNotData("NO Data Found")
        }
    }, [])
    
    return (
        <div>
            {
                notFound ? <p className="flex items-center justify-center h-screen">{notFound}</p> : <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {
                        isShow ? donations.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>) 
                        : donations.slice(0, 4).map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                        }
                    </div>
                    {donations.length > 4 && <button onClick={() => setShow(!isShow)} className="px-7 rounded-lg mt-12 bg-green-800 font-bold text-white block mx-auto">{isShow ? "" : "See All"}</button>}
                </div>
            }
        </div>
    );
};

export default Donation;