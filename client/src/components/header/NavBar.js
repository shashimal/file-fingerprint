import React from 'react'

const NavBar = () => {

    return (

        <div>

            <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbar" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Acme</a>
                <div className="collapse navbar-collapse justify-content-between" id="navbar">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Ball Bearings</a>
                        <a className="nav-item nav-link" href="#">TNT Boxes</a>
                    </div>
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Logout</a>
                    </div>
                </div>
            </nav>


        </div>

    );
}
export default NavBar;