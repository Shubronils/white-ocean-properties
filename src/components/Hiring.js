import React from 'react'

export default function Hiring() {
    return (
        <div>
            <main id="main">
                {/* ======= Intro Single ======= */}
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">We are hiring</h1>
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
                                            We are hiring
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
                                                <div className="col-md-6 mb-3">
                                                    <div className="col-md-12 mb-3 p-1">
                                                        <div className="form-group">
                                                            <label for="css" />Name *
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Your Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Email *
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <input name="email" type="email" className="form-control form-control-lg form-control-a" placeholder="Your Email" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Mobile No *
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <input type="tel" name="phone" className="form-control form-control-lg form-control-a" placeholder="123-45-678" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Alternative Mobile No 
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <input type="tel" name="phone" className="form-control form-control-lg form-control-a" placeholder="123-45-678" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Job Preferred Location *
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
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
                                                        <label for="css" />Upload Resume *
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <input type="file" id="myFile" name="filename" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <label for="css" />Your Message *
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <textarea name="message" className="form-control" cols={45} rows={8} placeholder="About your self" required defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
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
