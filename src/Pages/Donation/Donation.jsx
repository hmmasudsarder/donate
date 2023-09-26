import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donations, setDonation] = useState([]);
    const [notFound, setNotData] = useState(false)
    useEffect(() => {
        const donationsItem = JSON.parse(localStorage.getItem("donations"));
        if(donationsItem){
            setDonation(donationsItem)
        }else{
            setNotData("NO Data Found")
        }
    }, [])
    console.log(donations)
    return (
        <div>
            {
                notFound ? <p className="flex items-center justify-center h-screen">{notFound}</p> : <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {
                        donations.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;