import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Banner from "../pages/Banner/Banner";

import './Main.css'
// import ParallaxEffect from "../pages/Shared/Parallax/ParallaxEffect";
const Main = () => {
    return (
        <div>
  
            <Banner></Banner>
            {/* <ParallaxEffect></ParallaxEffect> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;