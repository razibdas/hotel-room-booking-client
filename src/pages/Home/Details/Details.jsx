import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';


import { EffectCoverflow, Pagination } from 'swiper/modules';
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Details = () => {
    const details = useLoaderData();

    console.log(details);
    const { price, description, image } = details;

    return (
        <div>
            <div className="backdrop-brightness-50">
                <Navbar ></Navbar>
            </div>
            <div className='w-[600px] h-[600px] mx-auto'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <img className='' src={image} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/fx4FS1h/sara-dubler-Koei-7y-Yt-Io-unsplash-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/Y8xq864/visualsofdana-T5p-L6ci-En-I-unsplash.jpg" />
                    </SwiperSlide>

                </Swiper>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;