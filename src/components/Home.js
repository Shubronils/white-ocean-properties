import React from 'react'
import '../assets/css/index.css'
import slide1 from '../assets/img/slide-1.jpg'
import slide2 from '../assets/img/slide-2.jpg'
import slide3 from '../assets/img/slide-3.jpg'

import agent4 from '../assets/img/agent-4.jpg'
import property6 from '../assets/img/property-6.jpg'
import property3 from '../assets/img/property-3.jpg'
import agent1 from '../assets/img/agent-1.jpg'
import agent5 from '../assets/img/agent-5.jpg'
import DemoCarousel from './DemoCarousel'
import logo1 from '../assets/img/logo1.png'
import testimonial from '../assets/img/testimonial.jpg'
import testimonial1 from '../assets/img/testimonial1.jpg'
import testimonial2 from '../assets/img/testimonial2.jpg'
import whiteocean1 from '../assets/img/whiteocean1.jpg'
import whiteocean2 from '../assets/img/whiteocean2.jpg'

export default function home() {
    return (
        <div>
            {/* ======= Property Search Section ======= */}
            <div className="click-closed" />
            {/*/ Form Search Star /*/}
            <div className="box-collapse">
                <div className="title-box-d">
                    <h3 className="title-d">Search Property</h3>
                </div>
                <span className="close-box-collapse right-boxed bi bi-x" />
                <div className="box-collapse-wrap form">
                    <form className="form-a">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div className="form-group">
                                    <label className="pb-2" htmlFor="Type">Keyword</label>
                                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Keyword" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="Type">Type</label>
                                    <select className="form-control form-select form-control-a" id="Type">
                                        <option>All Type</option>
                                        <option>For Rent</option>
                                        <option>For Sale</option>
                                        <option>Open House</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="city">City</label>
                                    <select className="form-control form-select form-control-a" id="city">
                                        <option>All City</option>
                                        <option>Alabama</option>
                                        <option>Arizona</option>
                                        <option>California</option>
                                        <option>Colorado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="bedrooms">Bedrooms</label>
                                    <select className="form-control form-select form-control-a" id="bedrooms">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="garages">Garages</label>
                                    <select className="form-control form-select form-control-a" id="garages">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="bathrooms">Bathrooms</label>
                                    <select className="form-control form-select form-control-a" id="bathrooms">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="price">Min Price</label>
                                    <select className="form-control form-select form-control-a" id="price">
                                        <option>Unlimite</option>
                                        <option>$50,000</option>
                                        <option>$100,000</option>
                                        <option>$150,000</option>
                                        <option>$200,000</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-b">Search Property</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>{/* End Property Search Section */}&gt;
            <DemoCarousel />
            <main id="main">
                {/* ======= Services Section ======= */}
                <section className="section-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Our Services</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-cart" />
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Best Deals</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            At White Ocean Property, it's terribly straightforward to seek out land service suppliers for your completely different needs of property services. Here you'll be able to notice land service suppliers, who pay attention to your varied material possession wants like interior decoration, property valuation, property practice, property finance, and plenty additional.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <a href="#" className="link-c link-icon">Read more
                                            <span className="bi bi-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-calendar4-week" />
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Loans</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            During this page, you'll notice the important estate services directory wherever varied material possession service suppliers square measure listed in step with their class. To seek out the service supplier in step with your demand, you decide on a class, and you'll be consequently radio-controlled to the correct page.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <a href="#" className="link-c link-icon">Read more
                                            <span className="bi bi-calendar4-week" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-card-checklist" />
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Brokerage</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            There are several advantages to full service like you will get everything in deep trouble you on time. You will not have to be compelled to worry regarding something from marketing property, shopping for a brand new, arranging a loan, or any legal documentation. The real estate professionals are skilled enough to advise you to be concern about the present market costs and to debate a lot of sophisticated aspects like concessions with you.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <a href="#" className="link-c link-icon">Read more
                                            <span className="bi bi-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Services Section */}

                {/* ======= Cta Section ======= */}
                <section className="section-count cta">
                    <div className="container">
                        <div class="col-md-12">
                            <div class="title-wrap d-flex justify-content-between">
                                <div class="title-box">
                                    <h2 class="title-a"></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="four col-md-3">
                                <div className="counter-box">
                                    <i className="fa fa-group" />
                                    <span className="counter">2000</span>
                                    <p>Happy Customers</p>
                                </div>
                            </div>
                            <div className="four col-md-3">
                                <div className="counter-box">
                                    <i className="fa fa-group" />
                                    <span className="counter">283</span>
                                    <p>New Projects</p>
                                </div>
                            </div>
                            <div className="four col-md-3">
                                <div className="counter-box">
                                    <i className="fa fa-shopping-cart" />
                                    <span className="counter">12048</span>
                                    <p>Properties for Sale</p>
                                </div>
                            </div>
                            <div className="four col-md-3">
                                <div className="counter-box">
                                    <i className="fa fa-user" />
                                    <span className="counter">4842</span>
                                    <p>Properties for Rent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> {/* ======= End Cta Section ======= */}

                {/* ======= Features Section ======= */}
                <section id="features" className="features section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
                                <img src={whiteocean1} className="img-fluid img-ocean" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4" data-aos="fade-left" data-aos-delay={100}>
                                <h3>Why choose us?</h3>
                                <p className="font1">
                                    Present property isn't simply shopping for a house or simply a piece of land, it’s regarding shopping for a lifestyle, a community, security, a similar society. It affects the fashion of you, your kids, your oldsters & even your future generations. It impacts the upbringing of your kid.
                                </p>
                                <p className="font1">
                                    Gift property offers a ton of things that helps your youngsters to get pleasure from Childhood in the Fullest attainable manner. Right Community helps children to boost data and introduce. There are several startups that have started by living accommodations Friends and are undefeated Business homes these days.
                                </p>
                                <p className="font1">
                                    A project that appearance low cost could also be valuable or vice-versa. There are plenty of things that decide the value of the project. A number of them are Locations, Builders, Construction quality, Open area, Floor plans, Facilities & Amenities, etc.
                                </p>
                                <p className="font1">
                                    There are thousands of things, if we tend to keep writing we are able to write a book on that. Thus, briefly, we tend to as consultants keep looking at, tracking, analyzing, reading, and finding out the real estate market daily.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* our vision section */}
                <div className="container main ">
                        <div className="row one">
                            <div className="col-sm-3 pic"> <img src="https://i.imgur.com/Ur43esv.jpg" className="img11" /> </div>
                            <div className="col-sm-8 test3"> OUR VISION  <br />
                                <p className="by">Make an opportunity for buying a community, a lifestyle, security, and a like-minded society. Not just a piece of land, house, or commercial space but connecting you to a place that matches your vibes. Going to the depth of the property and listing in our portfolio is to show the quality, its value which matches our customer's standard.</p>
                            </div>
                        </div><br /><br />
                        <div className="row two">
                            <div className="col-sm-8 test3"> OUR MISSION  <br />
                                <p className="by">Connecting with the best builders who have the properties which are well maintained and managed as per the families, individuals, and corporates need. From searching to document work, the customer should be well satisfied with each process.</p>
                            </div>
                            <div className="col-sm-3 pic"> <img src="https://i.imgur.com/8RKXAIV.jpg" className="img11" /> </div>
                        </div><br /><br />
                        <div className="row one">
                            <div className="col-sm-3 pic"> <img src="https://i.imgur.com/J6l19aF.jpg" className="img11" /> </div>
                            <div className="col-sm-8 test3"> OUR VALUES <br />
                                <p className="by">Some values are never pre-decided, we recreate some new which is interesting as well as beneficial for our customers. We value our customers and are keen to end with a search with us. <br />Excellence, Ownership, Respect, Boundless, Innovation, Trust & Integrity</p>
                            </div>
                        </div>
                </div>


                {/* ======= Latest Properties Section ======= */}
                <section className="section-property section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Latest Properties</h2>
                                    </div>
                                    <div className="title-link">
                                        <a href="/project">All Property
                                            <span className="bi bi-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="property-carousel" className="swiper container">
                            <div className="row">
                                <div className="carousel-item-b col-md-4">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img src={property6} alt="" className="img-a img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <a href="#">206 Mount
                                                            <br /> Olive Road Two</a>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <a href='/inquiry_from' className="price-a">price on request </a>
                                                    </div>
                                                    <a href="https://goo.gl/maps/ZnjVvajuyTDnxDRm9" target="_blank" className="link-a">Click here to view
                                                        <span className="bi bi-chevron-right" />
                                                        <span className='bi bi-suit-heart icon-heart' />
                                                    </a>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End carousel item */}
                                <div className="carousel-item-b col-md-4">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img src={property3} alt="" className="img-a img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <a href="#">157 West
                                                            <br /> Central Park</a>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <a href='/inquiry_from' className="price-a">price on request </a>
                                                    </div>
                                                    <a href="https://goo.gl/maps/ZnjVvajuyTDnxDRm9" target="_blank" className="link-a">Click here to view
                                                        <span className="bi bi-chevron-right" />
                                                        <span className='bi bi-suit-heart icon-heart' />
                                                    </a>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End carousel item */}
                                <div className="carousel-item-b col-md-4">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img src={property6} alt="" className="img-a img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <a href="#">245 Azabu
                                                            <br /> Nishi Park let</a>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <a href='/inquiry_from' className="price-a">price on request </a>
                                                    </div>
                                                    <a href="https://goo.gl/maps/ZnjVvajuyTDnxDRm9" target="_blank" className="link-a">Click here to view
                                                        <span className="bi bi-chevron-right" />
                                                        <span className='bi bi-suit-heart icon-heart' />
                                                    </a>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End carousel item */}
                                {/* End carousel item */}
                            </div>
                        </div>
                        <div className="propery-carousel-pagination carousel-pagination" />
                    </div>
                </section>{/* End Latest Properties Section */}

                <section className="section-testimonial section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Testimonial</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="accordion d-flex justify-content-center align-items-center height" id="accordionExample">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="p-3">
                                        <ul className="testimonial-list">
                                            <li>
                                                <div className="card p-3" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/udGH5tO.jpg" width={50} className="rounded-circle" />
                                                        <div className="d-flex flex-column ml-2"> <span className="nametestimonial">Rajvi jatakia</span> <span className="nametestimonial1">Sales Manager, Stack</span> </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card p-3" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/G1pXs7D.jpg" width={50} className="rounded-circle" />
                                                        <div className="d-flex flex-column ml-2"> <span className="nametestimonial">John Reeves</span> <span className="nametestimonial1">Head of Sales, Asana</span> </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card p-3" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/Uz4FjGZ.jpg" width={50} className="rounded-circle" />
                                                        <div className="d-flex flex-column ml-2"> <span className="nametestimonial">Luke Harper</span> <span className="nametestimonial1">Sales Team Lead,Sketch</span> </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 testimonials-margin">
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <h4>It was a great experience</h4>
                                                <div className="ratings"> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> </div>
                                                <p>White Ocean Properties has a very good rating of 5 stars. This rating is based on 6 reviews.</p>
                                            </div>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <h4>Thanks for this great service</h4>
                                                <div className="ratings">  <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> </div>
                                                <p>White Ocean Properties has a very good rating of 4 stars. This rating is based on 6 reviews.</p>
                                            </div>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <h4>You all are awesome thanks alot</h4>
                                                <div className="ratings"> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> </div>
                                                <p>White Ocean Properties has a very good rating of 3 stars. This rating is based on 6 reviews.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="whatsappbtn">
                    <a href="https://api.whatsapp.com/send?phone=7600033211&text=We%20are%20having%20Property%20related%20requirement" target="_blank" />
                </div>
                {/* <div className="container">
                    <div className='container'>
                        <div class="col-md-12">
                            <div class="title-wrap d-flex justify-content-between">
                                <div class="title-box">
                                    <h2 class="title-a">We Make A Difference</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="progress blue">
                                 <span className="progress-left"> <span className="progress-bar" /> </span> <span className="progress-right"> <span className="progress-bar" /> </span>
                                <div className="progress-value">90%</div>
                            </div>
                            <div className="progress yellow"> <span className="progress-left"> <span className="progress-bar" /> </span> <span className="progress-right"> <span className="progress-bar" /> </span>
                                <div className="progress-value">37.5%</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </main>{/* End #main */}
        </div>
    )
}
