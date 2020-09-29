import React from 'react';
import {NavLink} from 'reactstrap'; 
import TelegramIcon from '@material-ui/icons/Telegram';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import CreateIcon from '@material-ui/icons/Create';
import SubjectIcon from '@material-ui/icons/Subject';

const Contact =()=>{
    return(
        <div className = "contact-body">
        <div className="container contact-contain p-5">
       <div>
      <NavLink className="pb-4" href="/home"><span> <i className ="fa fa-home"></i>
       </span>Home  <span className="text-muted">/Contact</span></NavLink>
      <strong> <hr /> </strong> 
       </div>
      
      <div>
      <div>
       <strong> <TelegramIcon />
        <span>    Contact Us</span>    </strong> 
       <p className="p-4 text-muted"> We understand the importance of approaching each work integrally and believe 
       in the power of simple and easy communication. Feel free to contact us for any questions or if you need 
       any help or services ! Please provide a detailed explanation of your problem.</p>
    
       </div>
          
      
          <form>
         {/* ----------------------------- */}
    <div className="row">
        <div className="col-md-6">
        <div class="form-group">
    <label  className="text-muted" for="name">Name:-</label>
    <input  name="name" type="text" class="form-control pl-5" id="Name" placeholder="Enter your name" />
     <PersonIcon className="text-muted icon-position" />  
  </div>  </div>
       <div class="col-md-6">    
  <div class="form-group">
    <label className="text-muted"  for="email">Email:-</label>
    <input name="email" type="email" class="form-control pl-5" id="Email" placeholder="example@gmail.com" />
    <EmailIcon className="text-muted icon-position" /> 
  </div>
        </div>
    </div>
      {/* ---------------------- */}
{/* -------------------------------------------------- */}
   <div className="row">
   <div className= "col-md-6">
   <div class="form-group">
    <label  className="text-muted" for="number">Phone</label>
    <input name="number" type="number" class="form-control pl-5" id="Number" placeholder="Enter your phone number" />
    <PhoneIcon className="text-muted icon-position" />
  </div>
</div>
   
    <div className= "col-md-6">
  <div class="form-group">
    <label className="text-muted"  for="subject">Subject</label>
    <input name="subject" type="text" class="form-control pl-5" id="Subject" placeholder="Subject" />
    <SubjectIcon className="text-muted icon-position" />
  </div>
    </div>
   </div>
  
{/* -------------------------------------------------- */}
  <div class="form-group">
    <label  className="text-muted" for="message">Example textarea</label>
    <textarea  name="message" class="form-control pl-5" id="Message" 
    placeholder="Write your message"
    rows="10"></textarea>
    <CreateIcon className="text-muted icon-position-message" />
  </div>
<button name="submit" className="btn btn-outline-primary block submit-btn">Submit</button>
</form>
</div>
          </div>
        </div>
    )
}

export default Contact;