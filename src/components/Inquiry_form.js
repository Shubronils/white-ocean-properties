import React from 'react'

export default function Inquiry_form() {
    return (
        <div>
            <main id="main">
                {/* ======= Intro Single ======= */}
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">Inquiry form</h1>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Inquiry form
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>{/* End Intro Single*/}
                <div className="container">
                    <div className=" text-center mt-5 ">
                    </div>
                    <div className="row ">
                        <div className="col-lg-7 mx-auto">
                            <div className="card mt-2 mx-auto p-4 bg-light">
                                <div className="card-body bg-light">
                                    <div className="container">
                                        <form id="contact-form" role="form">
                                            <div className="controls">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className='name' htmlFor="form_name">Firstname *</label>
                                                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className='name' htmlFor="form_lastname">Lastname *</label>
                                                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className='name' htmlFor="form_email">Email *</label>
                                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." /> </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className='name' htmlFor="form_need">Please specify your need *</label>
                                                            <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                                                                <option value selected disabled>--Select Your Inquirey--</option>
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
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className='name' htmlFor="form_name">Your Number *</label>
                                                            <input type="tel" name="phone" className="form-control form-control-lg form-control-a" placeholder="123-45-678" required /> </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className='name' htmlFor="form_name">Alternative Mobile No </label>
                                                            <input type="tel" name="phone" className="form-control form-control-lg form-control-a" placeholder="123-45-678" required /> </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className='name' htmlFor="form_name">OTP *</label>
                                                            <input id="partitioned" className="form-control form-control-lg form-control-a" type="text" maxlength="5" /> </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className='name' htmlFor="form_message">Message *</label>
                                                            <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here." rows={4} required="required" data-error="Please, leave us a message." defaultValue={""} /> </div>
                                                    </div>
                                                    <div className="col-md-12 text-center">
                                                        <button type="submit" className="btn btn-a btn-b">Send Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> {/* /.8 */}
                        </div> {/* /.row*/}
                    </div>
                </div>
            </main>{/* End #main */}
        </div>
    )
}
