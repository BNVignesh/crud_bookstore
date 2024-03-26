import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
const Books = () => {
  const [books,setBooks]=useState([]);
  
  useEffect(()=>{
    async function getBooks(){
      await axios.get('http://localhost:8088/books').then(newbooks=>{setBooks(newbooks.data)}).then(err=>{console.log(err)});
    }
    getBooks();
  },[]);

  async function delbook(id){
    await axios.delete('http://localhost:8088/books/'+id).then(err=>{console.log(err)});
  }
  return (
    <div>
      <h1>Welcome to our bookstore</h1>
      {books.map((book)=>{
        return(
          <div key={book.id}>
            <img src={book.cover} alt="" />
            <h3>{book.title}</h3>
            <p>{book.desc}</p>
            <p>{book.price}</p>
            <button onClick={()=>{delbook(book.id)}}>delete</button>
            <button><Link to={`/updatebook/${book.id}`}>update</Link></button>
          </div>
          
        )
      })}
      <button><Link to='/addbook'>Add book</Link></button>
    </div>
  )
}

export default Books
