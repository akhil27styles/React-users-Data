import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Home=()=>{
 const [users,setUser]=useState([]);
 useEffect(()=>{
 loadUser();
 },[]);
    const loadUser=async ()=>{
        const res=await axios.get("http://localhost:3003/users");
        setUser(res.data.reverse());
    };
    const deleteUser=async id=>{
   await axios.delete(`http://localhost:3003/users/${id}`);
   loadUser();
    }
    return(
        <div className="container">
            <div className="py-4">
                <h1>Crud Application </h1>
                <hr/>
            <h3>Users Data React Application</h3>
            <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>(
        <tr key={index}>
            <th scope ="row" >{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
             <Link className="mr-3" to={`/user/${user.id}`}><Button variant="contained"  >View</Button></Link>
             <Link className="mr-3" to={`/users/edit/${user.id}`}><Button variant="contained" color="primary" >Edit </Button></Link>
             <Link className="mr-3" to="#"><Button variant="contained" color="secondary" onClick={()=>deleteUser(user.id)} > Delete </Button></Link>
             
            </td>
        </tr>
    ))}
  </tbody>
</table> 
            </div>
        </div>
    )
}
export default Home;