import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [showDisplayName, setShowDisplayName] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLinks = <>
        <li className="mr-2 rounded-lg text-white">
            <NavLink to="/" className="home-link">Home</NavLink>
        </li>
        <li className="mr-2 rounded-lg text-white"><NavLink to="jfkj">Rooms</NavLink></li>
        <li className="mr-2 rounded-lg text-white"><NavLink>My Booking</NavLink></li>
        {user?.email ? <>
            {/* <li><Link to='/booking'>My Bookings</Link></li> */}
            <li className="text-white"><button onClick={handleLogOut}>Log Out</button></li>
        </>
            : <li className="text-white"><Link to='/login'>Login</Link></li>
        }

    </>



    return (
        <div className="navbar backdrop-brightness-50 px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="ml-2 w-[100px] h-[100px]" src="https://i.ibb.co/Xb7WR5Z/logo-12-1.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end ">

                <div className="flex justify-center items-center ">

                    {user && (
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar ml-12"
                            >
                                <div className="w-10 rounded-full">
                                    {/* {user && <img src={user?.photoURL} />} */}
                                    <img
                                        className="w-10 rounded-full"
                                        src={user?.photoURL}
                                        alt="User Profile"
                                        onError={(e) => {
                                            e.target.src = defaultUserPhoto;
                                        }}
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content z-[1] p-4  backdrop-brightness-5 rounded-box w-40 mt-4"
                            >
                               
                                <div className="ml-10 -mt-10 text-center bg-gray-400 px-2 py-2 rounded-lg">
                                    {user && <p>{user?.displayName}</p>}
                                    <>
                                        {showDisplayName && <button className="text-white">{user.displayName}</button>}
                                        <button onClick={handleLogOut} className=" text-primary px-2 pt-2">
                                            Sign Out
                                        </button>
                                    </>

                                </div>
                            </ul>
                        </div>
                    )}

                    {/* {user ? (
                        <>
                            {showDisplayName && <button className="text-white">{user.displayName}</button>}
                            <button onClick={handleLogOut} className="btn">
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                    )} */}
                </div>

            </div>

        </div>


    );
};

export default Navbar;