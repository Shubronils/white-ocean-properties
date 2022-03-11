import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/img/logo1.png'

export default function Header() {
    return (
        <div>
            {/* ======= Header/Navbar ======= */}
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span />
                        <span />
                        <span />
                    </button>
                    <a className="navbar-brand text-brand" href="/">
                        <img className='logo' src={logo1} />
                    </a>
                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/project">Project </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hiring">We are hiring</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/requrments">Requirements</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item " href="/loan_assistant">Loan assistant</a>
                                    <a className="dropdown-item " href="/interior_designing">interior designing</a>
                                    <a className="dropdown-item " href="/home_loan_calculator">Home loan calculator</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                        <a href="https://www.facebook.com/whiteoceanprop" target="_blank" class="facebook">
                            <i className="bi bi-facebook" />
                        </a>
                    </button>
                    <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                        <a href="https://www.instagram.com/white.oceanproperties?r=nametag" target="_blank" class="facebook">
                            <i className="bi bi-instagram" />
                        </a>
                    </button>
                    <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                        <a href="https://api.whatsapp.com/send?phone=7600033211&amp;text=We%20are%20having%20Property%20related%20requirement" target="_blank" class="facebook">
                            <i className="bi bi-whatsapp" />
                        </a>
                    </button>
                </div>
            </nav>
            {/* End Header/Navbar */}
        </div>
    )
}
