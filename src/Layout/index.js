import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
    return (
        <div className="main-layout">
            <div className="container-fluid">
                <div className="row">
                    <Header />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

Layout.propTypes = {};

export default Layout;
