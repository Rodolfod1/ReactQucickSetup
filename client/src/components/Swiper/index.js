import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode,Thumbs,Navigation} from "swiper";
import 'swiper/css/thumbs'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import '../Swiper/styleswiper.css'

import Im1 from "../images/MainPage/Products1Swiper.png"
import Im4 from "../images/MainPage/Products2Swiper.png"
import Im5 from "../images/MainPage/Products3Swiper.png"
import Im6 from "../images/MainPage/Products4Swiper.png"


const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper]=useState(null);

  return (
    <div className='slide-Wrapper'>
     

        <Swiper
        // Navigation={true}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        effect={"Thubs"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={window.innerWidth<786 ? 1: "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        navigation={true}
        modules={[FreeMode, Thumbs, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4ko8VUdWZGRhE47oAlyzP5TVMgOq85VPuQ&usqp=CAU" alt='Image1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:
        ANd9GcTLwKr7k9tCuO_0koFn6j_KOZris2KUJ30PKw&usqp=CAU" alt='Image4' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Im5} alt='Image5' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Im6} alt='Image6' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRBAJvbwBDYpI8k8qD
          RuGpECzzWKobDKfhQ&usqp=CAU" 
          alt='im6'/>
        </SwiperSlide>
        
      </Swiper>

      {/* second swiper for thumbails */}
      <div className='SecSwiper'>  
      <Swiper
       onSwiper={setThumbsSwiper }
      spaceBetween={10}
        slidesPerView={window.innerWidth<786 ? 1: "auto"}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
         
      >
       <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4ko8VUdWZGRhE47oAlyzP5TVMgOq85VPuQ&usqp=CAU" alt='Image1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:
        ANd9GcTLwKr7k9tCuO_0koFn6j_KOZris2KUJ30PKw&usqp=CAU" alt='Image4' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Im5} alt='Image5' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Im6} alt='Image6' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRBAJvbwBDYpI8k8qD
          RuGpECzzWKobDKfhQ&usqp=CAU" 
          alt='im6'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOUMjMPGGLIV5I23T1HknK9krcjL33uQHew&usqp=CAU" 
          alt='im6'/>
        </SwiperSlide>

      </Swiper>
          
      </div>
     
    </div>
  
  )

}

export default Slider