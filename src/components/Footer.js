import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import SwiperCore from 'swiper'


import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper';
function Footer({id}) {
    const styles = id === 3 ? { display: 'none' } : {};
    
    return (
        <>
            <div className='footer-top' style={styles}>
                <div className="header">
                    
                    დამათებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 SIDE ლიდერბორდი
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
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
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