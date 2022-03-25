import react from 'react';
import './Header.css';
import navLogo from "../../assets/logo-nav.png";
import navBgImg from "../../assets/bg-image-nav.jpg";

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage: `url(${navBgImg})` }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img className='navLogo' src={navLogo} /> <span className="t360-nav-brand-txt">T360</span> <span className='circle-top'></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Investors Room </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Careers </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-success my-2 my-sm-0 nav-button" type="submit"><span>T360 DaaS</span></button>
                    </form>
                </div>
            </nav>
            <div className='main-heading-container'>
                <h1 className='main-heading-navbar-banner'>Delivering Purpose Driven Data</h1>
                <h4 className='sub-heading-navbar-banner'>Transaction 360  (T360 ) is bringing to the market a revolutionary
                    approach to address major industry data issues.</h4>
            </div>
            <div className='banner-bottom-btn-container'>
                <button className='banner-getstarted-btn'><span>Get Started</span></button>
                <button className='learn-more-btn align-btn-right'><span>Learn More</span></button>
            </div>
        </div>
    )
}

export default Header;