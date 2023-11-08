import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Available from "./Available";
import ProductFilter from "./ProductFilter";
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
        if(selectedValue === 'low'){
            fetch('http://localhost:5000/sortedPrice/low')

            .then(res => res.json())
            .then(data => setAvailables(data))
        }
        else if(selectedValue === 'high'){
            fetch('http://localhost:5000/sortedPrice/high')

            .then(res => res.json())
            .then(data => setAvailables(data))
        }
        else{
            fetch('http://localhost:5000/availableRooms')

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
            <div className="text-center mt-10">
                <ProductFilter></ProductFilter>
            </div>
            <form>
                <select onChange={handleOnChange} className="select select-bordered w-full max-w-xs" name="sortPrice" value={selectedValue}>
                    <option value={'all'}>All Price</option>
                    <option value={'high'}>Price high</option>
                    <option value={'low'}>Price low</option>
                </select>
            </form>
            <div className="grid grid-cols-1 lg:mx-56 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    availables?.map(available => <Available key={available._id} available={available}></Available>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AvailAbleRooms;