import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from "axios";
const User = () => {
const [user,setuser]=useState({
    name:"",
    username:"",
    email:"",
    phone:"",
    website:""
});
const {id}=useParams();
useEffect(()=>{
    loadUser();
},[]);
const loadUser=async ()=>{
    const res=await axios.get(`http://localhost:3003/users/${id}`);
    setuser(res.data);
};
    return (
      
        <div className="container py-4">
              <center>
            <Link className="btn btn-primary" to="/">Back to home</Link>
    <h1 className="display-4">User Id:{id}</h1>
    <hr/>
    <ul className="list-group w-50">
    Name: <li className="list-group-item " id="users">  &emsp;{user.name}</li>
    Username:  <li className="list-group-item " id="users"> &emsp;{user.username}</li>
    Email: <li className="list-group-item " id="users"> &emsp;{user.email}</li>
    Phone: <li className="list-group-item " id="users"> &emsp;{user.phone}</li>
    Website:<li className="list-group-item " id="users"> &emsp;{user.website}</li>
    </ul>
    </center>
        </div>
    )
}

export default User
