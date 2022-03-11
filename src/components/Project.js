import React from 'react'
import property1 from '../assets/img/property-1.jpg'
import property3 from '../assets/img/property-3.jpg'
import property6 from '../assets/img/property-6.jpg'
import property7 from '../assets/img/property-7.jpg'
import property8 from '../assets/img/property-8.jpg'
import property10 from '../assets/img/property-10.jpg'

export default function Project() {
    return (
        <div>
            <main id="main">
                {/* ======= Intro Single ======= */}
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">Our Amazing Properties</h1>
                                    <span className="color-text-a">Grid Projects</span>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Project
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>{/* End Intro Single*/}
                {/* ======= Property Grid ======= */}
                <section className="property-grid grid">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="grid-option">
                                    <form>
                                        <select className="custom-select">
                                            <option selected>All</option>
                                            <option value={1}>New to Old</option>
                                            <option value={2}>For Rent</option>
                                            <option value={3}>For Sale</option>
                                            <option value={4}>For Buy</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-a card-shadow">
                                    <div className="img-box-a">
                                        <img src={property1} alt="" className="img-a img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-overlay-a-content">
                                            <div className="card-header-a">
                                                <h2 className="card-title-a">
                                                    <a href="#">204 Mount
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
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-a card-shadow">
                                    <div className="img-box-a">
                                        <img src={property3} alt="" className="img-a img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-overlay-a-content">
                                            <div className="card-header-a">
                                                <h2 className="card-title-a">
                                                    <a href="#">204 Mount
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
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-a card-shadow">
                                    <div className="img-box-a">
                                        <img src={property6} alt="" className="img-a img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-overlay-a-content">
                                            <div className="card-header-a">
                                                <h2 className="card-title-a">
                                                    <a href="#">204 Mount
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
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-a card-shadow">
                                    <div className="img-box-a">
                                        <img src={property3} alt="" className="img-a img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-overlay-a-content">
                                            <div className="card-header-a">
                                                <h2 className="card-title-a">
                                                    <a href="#">204 Mount
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
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-a card-shadow">
                                    <div className="img-box-a">
                                        <img src={property8} alt="" className="img-a img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-overlay-a-content">
                                            <div className="card-header-a">
                                                <h2 className="card-title-a">
                                                    <a href="#">204 Mount
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
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-a card-shadow">
                                    <div className="img-box-a">
                                        <img src={property10} alt="" className="img-a img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-overlay-a-content">
                                            <div className="card-header-a">
                                                <h2 className="card-title-a">
                                                    <a href="#">204 Mount
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
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <nav className="pagination-a">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabIndex={-1}>
                                                <span className="bi bi-chevron-left" />
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item next">
                                            <a className="page-link" href="#">
                                                <span className="bi bi-chevron-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>{/* End Property Grid Single*/}

                <div className="whatsappbtn">
                    <a href="https://api.whatsapp.com/send?phone=7600033211&text=We%20are%20having%20Property%20related%20requirement" target="_blank" />
                </div>
            </main>{/* End #main */}
        </div>
    )
}
