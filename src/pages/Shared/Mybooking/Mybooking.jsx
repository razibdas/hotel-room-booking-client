import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Mybooking = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookingsAll?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <div className='backdrop-brightness-50'>
                <Navbar></Navbar>
            </div>
            <div>
                <h2>My Boookings: {bookings.length}</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mybooking;