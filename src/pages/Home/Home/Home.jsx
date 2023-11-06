import { useLoaderData } from "react-router-dom";
import RoomCard from "../RoomCard/RoomCard";
import Typewriter from 'typewriter-effect';
import Banner from "../../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {

    const rooms = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className="mt-8 text-4xl flex items-center justify-center">
                <Typewriter
                    options={{
                        strings: ['Feature For', 'Hotel Rooms'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-56 justify-center gap-6 mt-8">
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;