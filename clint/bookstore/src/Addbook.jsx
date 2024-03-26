import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios';

const Addbook = () => {
  const [newbook,setbook]=useState([]);
  async function bookadder(event){
    event.preventDefault();
    await axios.post('http://localhost:8088/books',newbook).then(err=>{console.log(err)});
  }
  return (
    <div>
      <h2>Add your book here</h2>
      <form action="">
        <input type="text" name="title" placeholder='title'   onChange={(e)=>{setbook({...newbook,title:e.target.value})}}/>
        <input type="text" name="cover" placeholder='link to cover' onChange={(e)=>{setbook({...newbook,cover:e.target.value})}}/>
        <input type="text" name="desc" placeholder='description' onChange={(e)=>{setbook({...newbook,desc:e.target.value})}}/>
        <input type="number" name="price" placeholder='cost of book' onChange={(e)=>{setbook({...newbook,price:e.target.value})}}/>
        <button type='submit' onClick={bookadder}><Link to="/Books" >Add book</Link> </button>
      </form>

    </div>
  )
}

export default Addbook
