import React, { useEffect, useRef, useState } from 'react';
import {TESTIMONIAL_DATA } from '../helpers/Testimonial';
import ButtonGroup from './ButtonGroup';
import SectionHeader from './SectionHeader';
import TestimonialCard from './TestimonialCard';
import Slider from 'react-slick'

function Testimonial() {

    const sliderRef = useRef()
    const [isBtnEnabled, setEnabler] = useState()

    const settings = {
         dots: false,
         speed: 400,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: false,
        easing: "ease-out",
        swipe: true,
        touchMove: true,
        swipeToSlide: true,
        draggable: true,
        accessibility: true,
         responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1}
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1}
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3}
        }
      ]
    };

    useEffect(() => {
        setEnabler(true)
    }, [])




    return (
        <section className="relative flex flex-col items-center" id="testimonial">
            <SectionHeader slogan="TESTIMONIAL" text="Meet Client Satisfaction"/>
            <div className="w-full relative py-10">
                <Slider {...settings} ref={sliderRef}>
                        {TESTIMONIAL_DATA.map(item => {
                            return (
                                 <div className="py-4" key={item.id}>
                                    <TestimonialCard {...item}/>
                                </div>
                            )
                        })}
                </Slider>
                {isBtnEnabled && <div className="flex py-3 justify-center space-x-2">
               <ButtonGroup prev={sliderRef.current.slickPrev} next={sliderRef.current.slickNext} pause={sliderRef.current.slickPause} play={sliderRef.current.slickPlay}/></div>}
            </div>
        </section>
    )
}

export default Testimonial