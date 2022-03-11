import React from 'react'
import img_1 from '../assets/img/img_1.jpg'
import img_2 from '../assets/img/img_2.jpg'
import img_3 from '../assets/img/img_3.jpg'
import img_4 from '../assets/img/img_4.jpg'
import kitchen from '../assets/img/kitchen.svg'
import blueprint from '../assets/img/blueprint.svg'
import dinningtable from '../assets/img/dinningtable.svg'
import lamp from '../assets/img/lamp.svg'
import pantone from '../assets/img/pantone.svg'
import stairs from '../assets/img/stairs.svg'


export default function Interior_designing() {
    return (
        <div>
            <main id="main">
                {/* ======= Intro Single ======= */}
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">Interior Desigen</h1>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Interior Desigen
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>{/* End Intro Single*/}

                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5 align-items-center">
                            <div className="col-md-7">
                                <h2 className="heading-39291 mb-0">Our Work</h2>
                            </div>
                            <div className="col-md-5 text">
                                <p className="mb-0">
                                    <a href="#" className="more-39291"><span>View All Works<i class="arrow right"></i></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="media-02819">
                                    <a href="#" className="img-link">
                                        <img src={img_1} alt="Image" className="img-fluid" />
                                    </a>
                                    <h3><a href="#">Creative Modern House</a></h3>
                                    <span>New York City, USA</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="media-02819">
                                    <a href="#" className="img-link">
                                        <img src={img_2} alt="Image" className="img-fluid" />
                                    </a>
                                    <h3><a href="#">Creative Modern House</a></h3>
                                    <span>New York City, USA</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="media-02819">
                                    <a href="#" className="img-link">
                                        <img src={img_3} alt="Image" className="img-fluid" />
                                    </a>
                                    <h3><a href="#">Creative Modern House</a></h3>
                                    <span>New York City, USA</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="media-02819">
                                    <a href="#" className="img-link">
                                        <img src={img_4} alt="Image" className="img-fluid" />
                                    </a>
                                    <h3><a href="#">Creative Modern House</a></h3>
                                    <span>New York City, USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section bg-primary">
                    <div className="container">
                        <div className="row mb-5 align-items-center">
                            <div className="col-md-7">
                                <h2 className="heading-39291 text-white mb-3">What We Do</h2>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis velit iure possimus repellendus, esse minus illum nobis deleniti?</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                                <div className="service-29193 text-center">
                                    <span className="img-wrap mb-5">
                                        <img src={kitchen} alt="Image" className="img-fluid" />
                                    </span>
                                    <h3 className="mb-4"><a href="#">Reiciendis Velit</a></h3>
                                    <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="service-29193 text-center">
                                    <span className="img-wrap mb-5">
                                        <img src={lamp} alt="Image" className="img-fluid" />
                                    </span>
                                    <h3 className="mb-4"><a href="#">Incidunt Distinctio</a></h3>
                                    <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay>
                                <div className="service-29193 text-center">
                                    <span className="img-wrap mb-5">
                                        <img src={stairs} alt="Image" className="img-fluid" />
                                    </span>
                                    <h3 className="mb-4"><a href="#">Reiciendis Velit Iure</a></h3>
                                    <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay>
                                <div className="service-29193 text-center">
                                    <span className="img-wrap mb-5">
                                        <img src={blueprint} alt="Image" className="img-fluid" />
                                    </span>
                                    <h3 className="mb-4"><a href="#">Boluptate Ipsum</a></h3>
                                    <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="service-29193 text-center">
                                    <span className="img-wrap mb-5">
                                        <img src={pantone} alt="Image" className="img-fluid" />
                                    </span>
                                    <h3 className="mb-4"><a href="#">Modern Elit</a></h3>
                                    <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                                <div className="service-29193 text-center">
                                    <span className="img-wrap mb-5">
                                        <img src={dinningtable} alt="Image" className="img-fluid" />
                                    </span>
                                    <h3 className="mb-4"><a href="#">Dolor Sitame</a></h3>
                                    <p>Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis incidunt distinctio voluptate .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whatsappbtn">
                    <a href="https://api.whatsapp.com/send?phone=7600033211&text=We%20are%20having%20Property%20related%20requirement" target="_blank" />
                </div>
            </main>{/* End #main */}
        </div>

    )
}
