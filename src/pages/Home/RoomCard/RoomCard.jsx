import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
    const { image, price, description } = room;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Price: ${price}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end w-full ">
                   <Link to="/rooms" className="w-full"> <button className="btn btn-secondary text-white w-full">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;