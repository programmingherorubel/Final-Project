import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../assets/home/slide1.jpg';
import img2 from '../assets/home/slide2.jpg';
import img3 from '../assets/home/slide3.jpg';
import img4 from '../assets/home/slide4.jpg';
import img5 from '../assets/home/slide5.jpg';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import CommonTitle from "../Share/CommonTitle";


const HomeCategory = () => {
    return (
        <div>
            <CommonTitle shortTitle={"---From 11:00am to 10:00pm---"} Heading={"ORDER ONLINE"} />
        <Swiper
        slidesPerView={4}
        loop={true}
        spaceBetween={30}
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
            <img className="mx-auto text-center w-full" src={img1} alt="" />
            <h4 className="text-2xl uppercase text-white text-center -mt-10">Salads</h4>
            </SwiperSlide>
        <SwiperSlide>
            <img className="mx-auto text-center w-full" src={img2} alt="" />
            <h4 className="text-2xl uppercase text-white text-center -mt-10">Pizza</h4>
            </SwiperSlide>
        <SwiperSlide>
            <img className="mx-auto text-center w-full" src={img3} alt="" />
            <h4 className="text-2xl uppercase text-white text-center -mt-10">soup</h4>
            </SwiperSlide>
        <SwiperSlide>
            <img className="mx-auto text-center w-full" src={img4} alt="" />
            <h4 className="text-2xl uppercase text-white text-center -mt-10">Desseart</h4>
            </SwiperSlide>
        <SwiperSlide>
            <img className="mx-auto text-center w-full" src={img5} alt="" />
            <h4 className="text-2xl uppercase text-white text-center -mt-10">Salads</h4>
            </SwiperSlide>
      </Swiper>
      </div>
    );
};

export default HomeCategory;



