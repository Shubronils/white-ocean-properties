import React from 'react'
import about1 from '../assets/img/slide-about-1.jpg'
import about2 from '../assets/img/about-2.jpg'
// import agent7 from '../assets/img/agent7.jpg'
import agent6 from '../assets/img/agent-6.jpg'
import main1 from '../assets/img/main1.jpeg'
// import agent2 from '../assets/img/agent2.jpg'
// import agent5 from '../assets/img/agent-5.jpg'


export default function About() {
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
      <main id="main">
        {/* ======= Intro Single ======= */}
        <section className="intro-single">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <h1 className="title-single">We Do Great Design For Creative Folks</h1>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>{/* End Intro Single*/}
        {/* ======= About Section ======= */}
        <section className="section-about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 position-relative">
                <div className="about-img-box">
                  <img src={about1} alt="" className="img-fluid" />
                </div>
                <div className="sinse-box sinse-new">
                  <h3 className="sinse-title sinse-new">White Ocean
                    <span />
                    <br /> Since 2017
                  </h3>
                  <p>Art &amp; Creative</p>
                </div>
              </div>
              <div className="col-md-12 section-t8 position-relative">
                <div className="row">
                  <div className="col-md-6 col-lg-5">
                    <img src={about2} alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-2  d-none d-lg-block position-relative">
                    <div className="title-vertical d-flex justify-content-start new-title">
                      <span>White Ocean Exclusive Property</span>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 section-md-t3">
                    <div className="title-box-d">
                      <h3 className="title-d">“Mesmerizing memories can be lived in your own home and the home of your dream is the White Oceans Property responsibility”
                      </h3>
                    </div>
                    <p className="color-text-a">
                      Millennials search and buy a home, flat, apartment, or any property to which they can give their own name for a lifetime. For this joyful reason, White Oceans Property has come up with luxurious and home feeling property in Ahmedabad-west for our customers. With a modern look and traditional observance, we have brought you a wide range of properties that not only give you your vibes but also bring you to a lifestyle that you have always dreamt about. We understand your choice and whether it's offline or online we are always there to help you in finalizing the best home of your choice.
                      Everyone's home is a collection of treasured memories, wall colors that give you positive vibes, the growing sons and daughters steps, the feelings of the complete family, and for some a nuclear lifestyle with their own business setups becomes the reason for celebrations.
                    </p>
                    <p className="color-text-a">
                      So to make this journey successful, right from the online search to offline visits, from a home loan to all paperwork, we keep a note that our customer's roadmap should be a joyful end.
                      White Oceans Property is in operation for the last 10 years and has happily completed various chapters of “sapno ka ghar” for numerous customers. We are non-stoppable with an aim to meet your ideal thoughts with your ideal property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* =======Team Section ======= */}
          <section className="section-agents section-t8">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title-wrap d-flex justify-content-between">
                    <div className="title-box">
                      <h2 className="title-a">Meet Our Team</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="card-box-d">
                    <div className="card-img-d">
                      <img src={main1} alt="" className="img-d img-fluid" />
                    </div>
                    <div className="card-overlay card-overlay-hover">
                      <div className="card-header-d">
                        <div className="card-title-d align-self-center">
                          <h3 className="title-d">
                            <a href="agent-single.html" className="link-two">Margaret Sotillo
                              <br /> Escala</a>
                          </h3>
                        </div>
                      </div>
                      <div className="card-body-d">
                        <p className="content-d color-text-a">
                          Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                        </p>
                        <div className="info-agents color-a">
                          <p>
                            <strong>Phone: </strong> +54 356 945234
                          </p>
                          <p>
                            <strong>Email: </strong> agents@example.com
                          </p>
                        </div>
                      </div>
                      <div className="card-footer-d">
                        <div className="socials-footer d-flex justify-content-center">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <i className="bi bi-facebook" aria-hidden="true" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <i className="bi bi-twitter" aria-hidden="true" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <i className="bi bi-instagram" aria-hidden="true" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <i className="bi bi-linkedin" aria-hidden="true" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="whatsappbtn">
          <a href="https://api.whatsapp.com/send?phone=7600033211&text=We%20are%20having%20Property%20related%20requirement" target="_blank" />
        </div>
      </main>{/* End #main */}
    </div>
  )
}
