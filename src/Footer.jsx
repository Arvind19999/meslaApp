import React from 'react';
import {NavLink} from 'reactstrap';
import web from '../src/images/mesla.png';

const Footer =()=>{
    return(
          <>
          <div className="footers bg-black p-5">
              <div className="row">
              <div className="col-md-4">
             <div className="pt-5 d-flex justify-content-between">
             {/* <img src="https://cdn2.vectorstock.com/i/1000x1000/02/26/letter-cm-modern-stylish-logo-design-vector-27280226.jpg"
         alt="Mesla_logo" className="nav-images" /> */}
         <img src={web} alt="Mesla_logo" className="nav-images" />
         <p className="text-muted">Mesla is a social question & answer Engine which
         will help you establish your community and connect with other people</p>
             </div>
              </div>
              <div className="col-md-4 text-center">
                  <h3 className="text-white">About Us</h3>
                  <ul>
                      <li className="list-items"> <NavLink  href="/about">Meet the Team</NavLink> </li>
                      <li className="list-items"> <NavLink  href="/">Home </NavLink> </li>
                      <li className="list-items"> <NavLink  href="/contact">Contact Us </NavLink> </li>
                      <li className="list-items"> <NavLink href="#">Help & suport</NavLink> </li>
                  </ul>
              </div>
              <div className="col-md-4 text-center">
                  <h3 className="text-white py-1">Follow On</h3>
              <div className="d-flex justify-content-center">
              <a  href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook text-muted icons"></i></a>
              
              <a  href="https://www.github.com" target="_blank"><i className="fa fa-github text-muted icons"></i></a>
              <a  href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter text-muted icons"></i></a>
              <a  href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram text-muted icons"></i></a>
              </div>
              </div>
              </div>
 <hr className="line-break" />
        {/* div for showing Copyright */}
              <div>
              <p className="text-muted text-center">
              Copyright &#169; 2020, All rights are reserved.</p>
              </div>
          </div>
        </>
    )
}

export default Footer;