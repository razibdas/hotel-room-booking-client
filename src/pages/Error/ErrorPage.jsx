import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <div className="backdrop-brightness-50 ">
                <Navbar></Navbar>
            </div>
            <img className="text-center mx-auto" src="https://i.ibb.co/mHqXPp8/istockphoto-171302206-1024x1024.jpg" alt="" />
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;