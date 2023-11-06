import { Outlet } from "react-router-dom";

import './Main.css'

// import ParallaxEffect from "../pages/Shared/Parallax/ParallaxEffect";
const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;