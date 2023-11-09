import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2'

const Mybooking = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookingsAll?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookingsAll/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted successfully!', '', 'success');

                            const remaining = bookings.filter((booking) => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting:', error);
                    });
            }
        });
    };


    return (
        <div>
            <div className='backdrop-brightness-50'>
                <Navbar></Navbar>
            </div>
            <div className='w-[800px] h-[600px] mt-12 mx-auto'>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Profile</th>
                                <th>Email</th>
                                <th>Email</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <BookingRow key={booking.id} booking={booking}
                                    handleDelete={handleDelete}></BookingRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mybooking;