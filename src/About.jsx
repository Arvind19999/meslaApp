import React from 'react';
import Aboutbox from './Aboutbox';
import Sdata from './Sdata';
const About =()=>{
   const boxes =(val)=>{
    return(<>
      <Aboutbox 
      image={val.image} 
      name = {val.name}
       details = {val.details}
      fb_link = {val.fb_link}
      github_link = {val.github_link}
      twitter_link = {val.twitter_link}
      instagram_link = {val.instagram_link}
      />
    
         
     
  </>  )
   }
  return(
    <>
    <h4 className="display-4 text-center pt-5">Meet With The Team</h4>
    {Sdata.map(boxes)}
    <h4 className="display-4 text-center prop"></h4>
    </>
  )
    // {/* <h4 className="display-4 text-center pt-5">Meet With The Team</h4> */}

      //         {/* <Aboutbox 
      //  image="https://thumbs.dreamstime.com/z/businessman-profile-icon-male-portrait-flat-design-vector-illustration-47075627.jpg" 
      //  name = "Nabina pandey"
      //  details = "kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw"
      //  fb_link = "https://www.facebook.com"
      //  github_link = "https://www.github.com"
      //  twitter_link = "https://www.twitter.com"
      //  instagram_link = "https://www.instagram.com"
      //  />
      //         <Aboutbox 
      //  image="https://thumbs.dreamstime.com/z/businessman-profile-icon-male-portrait-flat-design-vector-illustration-47075627.jpg" 
      //  name = "Suraj ojha"
      //  details = "kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw"
      //  fb_link = "https://www.facebook.com"
      //  github_link = "https://www.github.com"
      //  twitter_link = "https://www.twitter.com"
      //  instagram_link = "https://www.instagram.com"
      //  />
      //         <Aboutbox 
      //  image="https://thumbs.dreamstime.com/z/businessman-profile-icon-male-portrait-flat-design-vector-illustration-47075627.jpg" 
      //  name = "Puja mudhbari"
      //  details = "kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw kjfewkfjklfjwehwiejekfjmwefjejklejklejwjefw"
      //  fb_link = "https://www.facebook.com"
      //  github_link = "https://www.github.com"
      //  twitter_link = "https://www.twitter.com"
      //  instagram_link = "https://www.instagram.com"
      //  /> */}
    //     {/* <h4 className="display-4 text-center prop"></h4>
    //  {Sdata.map(boxes)} */}
 
}

export default About;