import React, { useState } from 'react'
import { Link,useLocation} from 'react-router-dom'
import axios from 'axios';

const Updatebook = () => {
  const [newbook,setbook]=useState([]);
  const location=useLocation();
  const bookid=location.pathname.split('/')[2];
  async function bookadder(event){
    event.preventDefault();
    await axios.put('http://localhost:8088/books/'+bookid,newbook).then(err=>{console.log(err)});
  }
  return (
    <div>
      <h2>update details of your book here</h2>
      <form action="">
        <input type="text" name="title" placeholder='title'   onChange={(e)=>{setbook({...newbook,title:e.target.value})}}/>
        <input type="text" name="cover" placeholder='link to cover' onChange={(e)=>{setbook({...newbook,cover:e.target.value})}}/>
        <input type="text" name="desc" placeholder='description' onChange={(e)=>{setbook({...newbook,desc:e.target.value})}}/>
        <input type="number" name="price" placeholder='cost of book' onChange={(e)=>{setbook({...newbook,price:e.target.value})}}/>
        <button type='submit' onClick={bookadder}><Link to="/Books" >update book</Link> </button>
      </form>

    </div>
  )
}

export default Updatebook
