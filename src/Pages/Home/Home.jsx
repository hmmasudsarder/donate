import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Headers/Banner/Banner";


const Home = () => {
    const donations = useLoaderData()
    // console.log(donations)
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                donations?.map(donate => <Donations key={donate.id} donate={donate}></Donations>)
            }
            </div>
        </div>
    );
};

export default Home;