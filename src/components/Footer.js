import React, {useState, useEffect} from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import SwiperCore from 'swiper'


import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper';
function Footer({id}) {
    const styles = id === 3 ? { display: 'none' } : {};
    const [number, setNumber] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 968) {
        setNumber(3);
      } else {
        setNumber(4);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    
    return (
        <>
            <div className='footer-top' style={styles}>
                <div className="header">
                    
                    დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 SIDE ლიდერბორდი
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
            slidesPerView={number}
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