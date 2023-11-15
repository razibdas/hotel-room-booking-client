import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Available from "./Available";
import { useEffect, useState } from "react";

const AvailAbleRooms = () => {

    const [availables, setAvailables] = useState([]);
    // const [priceValue, setPriceValue] = useState([]);
    const [selectedValue, setSelectedValue] = useState('all');
    // const rooms = useLoaderData();
    // console.log(rooms);

    // if(rooms.length > 0){
    //     setAvailables(rooms);
    //     console.log(rooms);
    // }
    // else{
    //     setAvailables("")
    // }

    useEffect(() => {
        if (selectedValue === 'low') {
            fetch('https://hotel-room-server-kappa.vercel.app/sortedPrice/low')

                .then(res => res.json())
                .then(data => setAvailables(data))
        }
        else if (selectedValue === 'high') {
            fetch('https://hotel-room-server-kappa.vercel.app/sortedPrice/high')

                .then(res => res.json())
                .then(data => setAvailables(data))
        }
        else {
            fetch('https://hotel-room-server-kappa.vercel.app/availableRooms')

                .then(res => res.json())
                .then(data => setAvailables(data))
        }


    }, [selectedValue])

    const handleOnChange = (event) => {
        const selectedOptionValue = event.target.value;
        setSelectedValue(selectedOptionValue);
        // console.log(selectedOptionValue);
    };



    return (
        <div>
            <div className="backdrop-brightness-50">
                <Navbar></Navbar>
            </div>
            <div className="lg:ml-56 mt-12">
                <form>
                    <select onChange={handleOnChange} className="select select-bordered w-full max-w-xs" name="sortPrice" value={selectedValue}>
                        <option value={'all'}>All Price</option>
                        <option value={'high'}>Price High to Low</option>
                        <option value={'low'}>Price Low to High</option>
                    </select>
                </form>
            </div>
            <div className="grid grid-cols-1 lg:mx-56 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    availables?.map(available => <Available key={available._id} available={available}></Available>)
                }
            </div>

            <div className="mt-12">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AvailAbleRooms;