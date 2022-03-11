import React from 'react'

export default function Blog() {
    return (
        <div>
            <main id="main">
                {/* ======= Intro Single ======= */}
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">Our Amazing Posts</h1>
                                    <span className="color-text-a">Grid News</span>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Blog
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>{/* End Intro Single*/}
                {/* =======  Blog Grid ======= */}
                <div className='container'>
                    <h1>Comming Soon...</h1>
                </div>
                {/* End Blog Grid*/}
                <div className="whatsappbtn">
                    <a href="https://api.whatsapp.com/send?phone=7600033211&text=We%20are%20having%20Property%20related%20requirement" target="_blank" />
                </div>
            </main>{/* End #main */}
        </div>
    )
}
