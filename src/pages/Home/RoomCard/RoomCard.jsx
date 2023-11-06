import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
    console.log(room);
    const { image, price, descripiton } = room;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{price}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end ">
                   <Link to="/rooms" className="w-full"> <button className="btn btn-secondary text-white ">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;