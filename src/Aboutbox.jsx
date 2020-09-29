import React from 'react';

const Aboutbox =(props)=>{
    console.log(props);
    return(<>
    
        <div className="box-div container">
   <div className="boxs">
    <img src={props.image}
    alt="about_me" className="abt_image" />]
    <h4 className="text-center">{props.name}</h4>
    <p className="container">{props.details}
    </p>
     <h4 className="text-center">Get in Touch</h4>
      <div className="d-flex justify-content-center">
      <a  href={props.fb_link} target="_blank"><i className="fa fa-facebook fa-lg text-center text-muted p-2"></i></a>
    <a  href={props.github_link} target="_blank"><i className="fa fa-github fa-lg text-muted box-icon p-2"></i></a>
    <a  href={props.twitter_link} target="_blank"><i className="fa fa-twitter fa-lg text-muted box-icon p-2"></i></a>
    {/* <a  href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter fa-lg text-muted box-icon p-2"></i></a> */}
    <a  href={props.instagram_link} target="_blank"><i className="fa fa-instagram fa-lg text-muted p-2"></i></a>
      </div>

   </div>
        </div>
    
    </>)
}

export default Aboutbox;