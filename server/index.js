const express = require('express');
const mysql = require('mysql');
const cors=require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vignesh13',
    database: 'books',
    port:3310
})

app.get('/books',(req,res)=>{

    const sql='select * from info';
    con.query(sql,(err,data)=>{
        if(err) return res.json(err);
        res.json(data);
    })
    
})

app.post('/books',(req,res)=>{
    const sql="insert into info (title,`desc`,cover,price) values (?,?,?,?)";
    const values=[req.body.title,req.body.desc,req.body.cover,req.body.price]
    con.query(sql,values,(err,data)=>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.delete('/books/:id',(req,res)=>{
    const bookid=req.params.id;
    const sql='delete from info where id=?';
    con.query(sql,bookid,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    }) 
})

app.put('/books/:id',(req,res)=>{
    const bookid=req.params.id;
    const sql='update info set `title`=? ,`desc`=?,`cover`=? ,`price`=? where id= ?'
    const values=[req.body.title,req.body.desc,req.body.cover,req.body.price]
    con.query(sql,[...values,bookid],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8088);