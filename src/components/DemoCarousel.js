import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../assets/css/style.css';
// import slide1 from '../assets/img/slide-1.jpg';
import banner1 from '../assets/img/banner1.jpg'
import banner3 from '../assets/img/banner3.jpg'
// import banner5 from '../assets/img/banner5.jpg'
import banner6 from '../assets/img/banner6.jpg'
// import slide2 from '../assets/img/slide-2.jpg';
// import slide3 from '../assets/img/slide-3.jpg';
export class DemoCarousel extends Component {
    render() {
        return (
            <div>
                <div>
                    <OwlCarousel items={1}
                        className="owl-theme"
                        loop
                        nav
                        margin={8} 
                        autoplay={true}  
                        >
                        <div className='slider-item'>
                            <img className="img" src={banner1} />
                            <div className="intro-content display-table">
                                <div className="table-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="intro-body">
                                                    <p className="intro-title-top">Doral, Florida
                                                        <br /> 78345
                                                    </p>
                                                    <h1 className="intro-title mb-4 ">
                                                        <span className="color-b">204 </span> Mount
                                                        <br /> Olive Road Two
                                                    </h1>
                                                    <p className="intro-subtitle intro-price">
                                                        <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slider-item'>
                            <img className="img" src={banner3} />
                            <div className="intro-content display-table">
                                <div className="table-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="intro-body">
                                                    <p className="intro-title-top">Doral, Florida
                                                        <br /> 78345
                                                    </p>
                                                    <h1 className="intro-title mb-4 ">
                                                        <span className="color-b">204 </span>  Rino
                
                                                        <br /> Venda Road Five
            
                                                    </h1>
                                                    <p className="intro-subtitle intro-price">
                                                        <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className="img" src={banner6} />
                            <div className="intro-content display-table">
                                <div className="table-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="intro-body">
                                                    <p className="intro-title-top">Doral, Florida
                                                        <br /> 78345
                                                    </p>
                                                    <h1 className="intro-title mb-4 ">
                                                        <span className="color-b">204 </span>  Alira
                      
                                                        <br /> Roan Road One
                                                    </h1>
                                                    <p className="intro-subtitle intro-price">
                                                        <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

            </div>
        )
    }
}


export default DemoCarousel  