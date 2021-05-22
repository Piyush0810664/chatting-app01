

if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();
}


const express=require('express');
const app=express();
const path=require('path');
const socketio=require('socket.io');
const http=require('http');
const server=http.createServer(app);
const io=socketio(server);


app.use('/',express.static(path.join(__dirname,'/public')));


const users={}

io.on('connection',(socket)=>{
  
socket.on('login',(data)=>{
   // console.log(data.name);
   users[socket.id]=data.name
})

socket.on('send',(data)=>{
    // console.log(data.msg)

    io.emit('recieved',{
        msg:data.msg,
        name:users[socket.id]
    })
})

})












server.listen(process.env.PORT || 3001,()=>{
    console.log("server started at http://localhost:3001");
})