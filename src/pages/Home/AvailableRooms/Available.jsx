import React from 'react';

import { Link } from 'react-router-dom';

const Available = ({ available }) => {
    const { _id, image, price, description } = available;
    return (
        <div>  
            <div>
                <div className="card  card-compact  shadow-xl">

                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Price: ${price}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                           <Link to={`/details/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Available;





