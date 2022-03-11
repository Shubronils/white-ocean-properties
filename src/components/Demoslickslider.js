import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from "../assets/img/slide-1.jpg"
import slide2 from "../assets/img/slide-2.jpg"
import slide3 from "../assets/img/slide-3.jpg"


export default class Demoslickslider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2></h2>
                <Slider {...settings}>
                    

                </Slider>
            </div>
        );
    }
}