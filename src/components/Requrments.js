import React from 'react'

export default function Requrments() {
    return (
        <div>
            <main id="main">
                {/* ======= Intro Single ======= */}
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">Requirements</h1>
                                    <span className="color-text-a">Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut natus officia corrupti qui autem fugit consectetur quo. Et ipsum eveniet laboriosam voluptas beatae possimus qui ducimus. Et voluptatem deleniti. Voluptatum voluptatibus amet. Et esse sed omnis inventore hic culpa.</span>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            requirements
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>{/* End Intro Single*/}
                {/* ======= Contact Single ======= */}
                <section className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-md-7">
                                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Demand Type *
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group button">
                                                        <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
                                                        &nbsp;
                                                        <label htmlFor="html">Residential</label>
                                                        &nbsp;
                                                        <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
                                                        &nbsp;
                                                        <label htmlFor="css">Commercial</label>
                                                        &nbsp;
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Property Type *
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group button">
                                                        <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
                                                        &nbsp;
                                                        <label htmlFor="html">Buy</label>
                                                        &nbsp;
                                                        <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
                                                        &nbsp;
                                                        <label htmlFor="css">Rent/Lease</label>
                                                        &nbsp;
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Your Name*
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Your Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Your Email*
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input name="email" type="email" className="form-control form-control-lg form-control-a" placeholder="Your Email" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Your Number *
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="tel" name="phone" className="form-control form-control-lg form-control-a" placeholder="123-45-678" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Your Location *
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <select className='oppo' name="City" id="City">
                                                            <option value="ahmedabad">Ahmedabad</option>
                                                            <option value="pune">Pune</option>
                                                            <option value="mumbai">Mumbai</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Select Property Type *
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <select className='oppo' name="City" id="City">
                                                            <option value="Select Your Property requirements">Select Your Property requirements</option>
                                                            <option value="commercial office">commercial office</option>
                                                            <option value="land">land</option>
                                                            <option value="apartment">apartment</option>
                                                            <option value="flat/banglows">flat/banglows</option>
                                                            <option value="villa">villa</option>
                                                            <option value="Penthouse">penthouse</option>
                                                            <option value="rowhouse">rowhouse</option>
                                                            <option value="shops">shops</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Society Name *
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Society Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Flat Number *
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Flat Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Expected Value *
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Value" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <textarea name="message" className="form-control" cols={45} rows={8} placeholder="About your requirements" required defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 text-center">
                                                    <button type="submit" className="btn btn-a">Send</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Contact Single*/}

                <div className="whatsappbtn">
                    <a href="https://api.whatsapp.com/send?phone=7600033211&text=We%20are%20having%20Property%20related%20requirement" target="_blank" />
                </div>
            </main>{/* End #main */}
        </div>
    )
}
