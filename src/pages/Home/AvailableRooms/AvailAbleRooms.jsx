import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Available from "./Available";

const AvailAbleRooms = () => {
    const availables = useLoaderData();
    console.log(availables);
    return (
        <div>
            <div className="backdrop-brightness-50">
                <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-56 justify-center gap-6 mt-8">
                {
                    availables.map(available => <Available key={available._id} available={available}></Available>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AvailAbleRooms;