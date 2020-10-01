import React, { useState } from 'react';
import { Button, Modal, ModalHeader,} from 'reactstrap';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Login from './Login.jsx';
import {NavLink} from 'reactstrap';
const Signup = (props) => {
  const {
    label,
    classNames
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className={classNames} onClick={toggle}>{label}</Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>  </ModalHeader>
       <div className="d-flex">

       <div className="signup-img">
         <div className="p-5 m-4">
         <strong><h3 className="text-white">Sign Up</h3>
      <p className="text-white my-4">Sign up to our social questions and Answers Engine to ask questions,
      answer's people questions and connect with people. 
      </p> </strong>
           {/* <button className="btn btn-info w-100 p-3 text-white">Have An Account?Sign In</button> */}
         <Login name ="LogIn" 
           classNames = "btn btn-info w-100 p-3 text-white"
           label = "Have An Account?Sign In"
         />
         </div>
       </div>

           <div className = "container signup-form-container">
               <form>
               <div class="form-group">
    <label  className="text-muted" for="name">Username</label>
    <input name="name" type="text" class="form-control pl-5" id="Name" required/>
    <PersonIcon className="text-muted icon-position" />
  </div>

  <div class="form-group">
    <label  className="text-muted" for="email">E-mail</label>
    <input name="email" type="email" class="form-control pl-5" id="Email" required />
    <EmailIcon className="text-muted icon-position" />
  </div>

  <div class="form-group">
    <label  className="text-muted" for="password">Password</label>
    <input name="password" type="password" class="form-control pl-5" id="Password" required />
    <LockIcon className="text-muted icon-position" />
  </div>

  <div class="form-group">
    <label  className="text-muted" for="password">Confirm Password</label>
    <input name="Cpassword" type="password" class="form-control pl-5" id="Password" required />
    <LockIcon className="text-muted icon-position" />
  </div>  
  
  <label for="checkbox1">
 <input type="checkbox" name = "checkbox" id="CheckBox" value="checkbox1" />  
    By regestring you will agree to the Terms Policy and Services of the company</label>         
  <button className="btn btn-outline-primary my-1 w-100"> Sign Up</button>   
  {/* <button className="hide-display-btn">  Alread Have an account? LogIn</button>  */}
  <Login name ="LogIns" 
           classNames = "hide-display-btn"
           label = "Alread Have an account? LogIn"
         />
               </form>
           </div>
       </div>
       
      </Modal>
    </div>
  );
}

export default Signup;















