import React,{useState} from 'react'
import {useHistory,Link} from 'react-router-dom'
import './Add.css'
import Axios from 'axios';
export default function AddUser() {
  let history=useHistory();
    const [user, setuser] = useState({
      name:"",
      username:"",
      email:"",
      phone:"",
      website:""
    })
    const {name,username,email,phone,website}=user;
    const onInputChange=(e)=>{
     setuser({...user,[e.target.name]:e.target.value})
    };
    const onSubmit=async(e)=>{
    e.preventDefault();
    await Axios.post("http://localhost:3003/users",user);
    history.push("/");

    }
    return (
      <>
      <center><Link className="btn btn-primary mt-5" to="/">Back to home</Link></center>
            <div className="card">
                <h1><center>Add User</center></h1>
                  <div className="card-body">
          <form onSubmit ={e=>onSubmit(e)}>
  <div className="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label"></label>
    <div className="col-sm-7">
      <input type="text" className="form-control" id="inputName" placeholder="Enter Your Name" 
      name="name"
     value={name} onChange={e=>onInputChange(e)}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label"></label>
    <div className="col-sm-7">
      <input type="text" className="form-control" id="inputUsername" placeholder="Enter Your Username"
      name="username"
    value={username}  onChange={e=>onInputChange(e)}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label"></label>
    <div className="col-sm-7">
      <input type="email" className="form-control" id="inputEmail" placeholder="Enter Your Email-Address"
     name="email"value={email} onChange={e=>onInputChange(e)} />
    </div>
  </div>

  <div className="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label"></label>
    <div className="col-sm-7">
      <input type="number" className="form-control" id="inputPhonenumber" placeholder="Enter Your Phonenumber"
    name="phone" value={phone} onChange={e=>onInputChange(e)}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label"></label>
    <div className="col-sm-7">
      <input type="text" className="form-control" id="inputWebsite" placeholder="Enter Your Website Name"
     name="website"value={website} onChange={e=>onInputChange(e)}/>
    </div>
  </div>
  <button className="btn btn-primary btn-block" id="Add-button"> Add User</button>
    </form>
           </div>
         </div>
         </>
    )
}