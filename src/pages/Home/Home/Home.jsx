import { useLoaderData } from "react-router-dom";
import RoomCard from "../RoomCard/RoomCard";
import Typewriter from 'typewriter-effect';
import Banner from "../../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import ParallaxEffect from "../../Shared/Parallax/ParallaxEffect";
import Location from "../Location/Location";

const Home = () => {

    const rooms = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <ParallaxEffect></ParallaxEffect>
            <div className="mt-8 text-4xl flex items-center justify-center">
                <Typewriter
                    options={{
                        strings: ['Feature For', 'Hotel Rooms'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-56 justify-center gap-6 mt-8">
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
            <Location></Location>
            <div className="mt-12">
            <Footer ></Footer>
            </div>
        </div>
    );
};

export default Home;