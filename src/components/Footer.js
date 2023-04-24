import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import SwiperCore from 'swiper'

import 'swiper/css/effect-fade';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper';
function Footer() {
    SwiperCore.use([Autoplay]);
    SwiperCore.use([Navigation, Pagination]);
    return (
        <>
            <div className='footer-top'>
                <div className="header">
                    ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ
                </div>
                <span>
                    * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
                </span>
            </div>
            <div className="terms">
                <div className="header">წესები და პირობები</div>
                <div className="term">
                    როდის იწყება და რა ფორმატით გაიმართება აქცია <FaChevronDown />
                </div>
                <div className="term">
                    როგორ მივიღო აქციაში მონაწილეობა? <FaChevronDown />
                </div>
                <div className="term">
                    სხვადასვა <FaChevronDown />
                </div>
            </div>
            <div className="promotions">
            <div className="header">
              მსგავსი აქციები
            </div>
            <Swiper
              spaceBetween={27}
              slidesPerView={4}
              slidesPerGroup={3}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[EffectFade, Pagination]}
            >
              <SwiperSlide> <img src={require('../assets/images/slide1.png')} alt="" /></SwiperSlide>
              <SwiperSlide> <img src={require('../assets/images/carorange.png')} alt="" /></SwiperSlide>
              <SwiperSlide> <img src={require('../assets/images/slide3.png')} alt="" /></SwiperSlide>
              <SwiperSlide> <img src={require('../assets/images/slide1.png')} alt="" /></SwiperSlide>
              <SwiperSlide> <img src={require('../assets/images/carorange.png')} alt="" /></SwiperSlide>
              <SwiperSlide> <img src={require('../assets/images/slide3.png')} alt="" /></SwiperSlide>
            </Swiper>
          </div>
            
        </>
    )
}

export default Footer