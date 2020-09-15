import React,{useState,useEffect} from 'react'
import {useHistory,useParams,Link} from 'react-router-dom'
import './Add.css'
import Axios from 'axios';
export default function EditUser() {
  let history=useHistory();
  const {id}=useParams();
    const [user, setuser] = useState({
      name:"",
      username:"",
      email:"",
      phone:"",
      website:""
    })
    const {name,username,email,phone,website}=user;
    const onInputChange=e=>{
     setuser({...user,[e.target.name]:e.target.value})
    };

    useEffect(() => {
       loadUser();
    }, [])
    const onSubmit=async e=>{
    e.preventDefault();
    await Axios.put(`http://localhost:3003/users/${id}`,user);
    history.push("/");
    };
  // jo user ka data hai vo dikhane ke liye edit mai..purana vala
  const loadUser=async()=>{
 const result=await Axios.get(`http://localhost:3003/users/${id}`);
 setuser(result.data);
  }

    return (
      <>
      <center><Link className="btn btn-primary mt-5" to="/">Back to home</Link></center>
            <div className="card">
                <h1><center>Edit a User</center></h1>
          <div className="card-body">
          <form onSubmit ={e=>onSubmit(e)}>
  <div className="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label"></label>
    <div className="col-sm-7">
      <input type="text" className="form-control" id="inputName" placeholder="Enter Your Name" 
     name="name" value={name} onChange={e=>onInputChange(e)}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label"></label>
    <div className="col-sm-7">
      <input type="text" className="form-control" id="inputUsername" placeholder="Enter Your Username"
    name="username"value={username}  onChange={e=>onInputChange(e)}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label"></label>
    <div className="col-sm-7">
      <input type="email" className="form-control" id="inputEmail" placeholder="Enter Your Email-Address"
    name="email" value={email} onChange={e=>onInputChange(e)} />
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
    name="website" value={website} onChange={e=>onInputChange(e)}/>
    </div>
  </div>
  <center><button className="btn btn-warning btn-block" id="edit-button"> Edit User</button></center>
    </form>
           </div>
         </div>
         </>
    );
};
