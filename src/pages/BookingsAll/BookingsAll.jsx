import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const BookingsAll = () => {

    const loaded = useLoaderData();
    console.log(loaded);

    const { price, description, title, image } = loaded;

    const { user } = useContext(AuthContext);

    const handleBookNow = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const book = {
            customerName: name,
            email,
            date,
            image,
            price: price
        }
        console.log(book);

        fetch('https://hotel-room-server-enidu8vy6-razibs-projects-f5b9e70e.vercel.app/bookingsAll', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (

        <div>
            <div className="backdrop-brightness-50">
                <Navbar></Navbar>
            </div>
            <div className="card-body w-[800px] mt-12 backdrop-brightness-50 mx-auto">
                <h2 className="text-4xl text-center text-white">Booking Now</h2>
                <form onSubmit={handleBookNow}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-secondary btn-block" type="submit" value={'Book Confirm'} />
                    </div>
                </form>
            </div>
            <div className="mt-12">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default BookingsAll;