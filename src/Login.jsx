import React, { useState } from 'react';
import { Button, Modal, ModalHeader,} from 'reactstrap';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Signup from './Signup.jsx';
const Login = (props) => {
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
       <div className="d-flex login-size">

       <div className="login-img">
         <div className="p-5 m-4">
         <strong><h3 className="text-white">LogIn</h3>
      <p className="text-white my-4">LogIn to our social questions and Answers Engine to ask questions,
      answer's people questions and connect with people. 
      </p> </strong>
           {/* <button className="btn btn-info w-100 p-3 text-white">Sign Up Here</button> */}
           <Signup name="SignUp"
           classNames="btn btn-info w-100 p-3 text-white"
           label="Sign Up Here" />
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
    <label  className="text-muted" for="password">Password</label>
    <input name="password" type="password" class="form-control pl-5" id="Password" required />
    <LockIcon className="text-muted icon-position" />
  </div>

  
  <label for="checkbox1">
 <input type="checkbox" name = "checkbox" id="CheckBox" value="checkbox1" />  
 &nbsp; Remember Me!</label><span className="forgetPassword">	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;
 &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; Forget Password?</span>         
  <button className="btn btn-outline-primary my-4 w-100"> Log In</button>   
  {/* <button className="hide-display-btn-signup"> SignUp Here  Here</button>     */}
  <Signup name="SignUps"
           classNames="hide-display-btn-signup"
           label="SignUp Here" />
               </form>
           </div>
       </div>
       
      </Modal>
    </div>
  );
}

export default Login;















