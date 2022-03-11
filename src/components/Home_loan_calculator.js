import React from 'react'

export default function Home_loan_calculator() {
    return (
        <div>
            <main id="main">
                {/* ======= Intro Single ======= */}
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">Loan calculator</h1>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            loan calculator
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>{/* End Intro Single*/}
                <div className="container">
                    <div className="price-box">
                        <div className="row">
                            <div className="col-sm-6">
                                <form className="form-horizontal form-pricing" role="form">
                                    <div className="price-slider">
                                        <h4 className="great">Amount</h4>
                                        <span>Minimum $100K is required</span>
                                        <div className="col-sm-12">
                                            <div id="slider_amirol" />
                                        </div>
                                    </div>
                                    <div className="price-slider">
                                        <h4 className="great">Duration</h4>
                                        <span>Please choose one</span>
                                        <div className="btn-group btn-group-justified">
                                            <div className="btn-group btn-group-lg">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg btn-block month active-month selected-month"
                                                    id="24month"
                                                >
                                                    24 Months
                                                </button>
                                            </div>
                                            <div className="btn-group btn-group-lg">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg btn-block month"
                                                    id="18month"
                                                >
                                                    18 Months
                                                </button>
                                            </div>
                                            <div className="btn-group btn-group-lg">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg btn-block month"
                                                    id="12month"
                                                >
                                                    12 Months
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-slider">
                                        <h4 className="great">Term</h4>
                                        <span>Please choose one</span>
                                        <input
                                            name="sliderVal"
                                            type="hidden"
                                            id="sliderVal"
                                            defaultValue={0}
                                            readOnly="readonly"
                                        />
                                        <input
                                            name="month"
                                            type="hidden"
                                            id="month"
                                            defaultValue="24month"
                                            readOnly="readonly"
                                        />
                                        <input
                                            name="term"
                                            type="hidden"
                                            id="term"
                                            defaultValue="quarterly"
                                            readOnly="readonly"
                                        />
                                        <div className="btn-group btn-group-justified">
                                            <div className="btn-group btn-group-lg">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg btn-block term active-term selected-term"
                                                    id="quarterly"
                                                >
                                                    Quarterly
                                                </button>
                                            </div>
                                            <div className="btn-group btn-group-lg">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg btn-block term"
                                                    id="monthly"
                                                >
                                                    Monthly
                                                </button>
                                            </div>
                                            <div className="btn-group btn-group-lg">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg btn-block term"
                                                    id="weekly"
                                                >
                                                    Weekly
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-6">
                                <div className="price-form">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="amount_amirol" className="control-label">
                                                    Annually ($):{" "}
                                                </label>
                                                <span className="help-text">Amount that you need to pay</span>
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="hidden"
                                                    id="amount_amirol"
                                                    className="form-control"
                                                />
                                                {/* <p class="price lead" id="total"></p> */}
                                                <input
                                                    className="price lead"
                                                    name="totalprice"
                                                    type="text"
                                                    id="total"
                                                    disabled="disabled"
                                                    style={{}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="amount_amirol" className="control-label">
                                                    Monthly ($):{" "}
                                                </label>
                                                <span className="help-text">Amount that you need to pay</span>
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="hidden"
                                                    id="amount_amirol"
                                                    className="form-control"
                                                />
                                                {/* <p class="price lead" id="total12"></p> */}
                                                <input
                                                    className="price lead"
                                                    name="totalprice12"
                                                    type="text"
                                                    id="total12"
                                                    disabled="disabled"
                                                    style={{}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="amount_amirol" className="control-label">
                                                    Weekly ($):{" "}
                                                </label>
                                                <span className="help-text">Amount that you need to pay</span>
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="hidden"
                                                    id="amount_amirol"
                                                    className="form-control"
                                                />
                                                {/* <p class="price lead" id="total52"></p> */}
                                                <input
                                                    className="price lead"
                                                    name="totalprice52"
                                                    type="text"
                                                    id="total52"
                                                    disabled="disabled"
                                                    style={{}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 30 }} />
                                    <hr className="style" />
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg btn-block"
                                            >
                                                Proceed <span className="glyphicon glyphicon-chevron-right" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <img
                                                src="https://github.com/AmirolAhmad/Bootstrap-Calculator/blob/master/images/payment.png?raw=true"
                                                className="img-responsive payment"
                                            />
                                        </div>
                                    </div>
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
