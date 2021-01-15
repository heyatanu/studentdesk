import React from 'react';
import logo from './Images/toplogo.png';

function Book_Navbar(){
    return(
        
    <>
        <nav className="nav_bar_css">
        <div>
        <a  href="/" className="navbar-brand">
        <img src={logo}  alt="as"/>
        </a>
        </div>
        <div id="login_sec">
        <form className="form-inline form_sec">
            <input type="text" name="name" className="form-control" placeholder="Search by author, book name"/>
            <button className="btn btn-outline-success submit_btn" type="submit"><i className="fa-1x fa fa-search" aria-hidden="true"></i></button>
        </form>
        <form className="form-inline">
        <button className="btn btn-outline-success imput_right_btn " >Past Books</button>
        <button className="btn btn-outline-success imput_right_btn" >Login / Signup</button>
        </form>

        </div>
        </nav>
    </>
    );
    
}


export default Book_Navbar;

