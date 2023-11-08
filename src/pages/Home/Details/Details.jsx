import { useLoaderData } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();

    console.log(details);
    const {price , description , image} = details;

    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default Details;