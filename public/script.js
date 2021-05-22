const socket = io();




$('#chat').hide();

$('#login-btn').click(()=>{
    socket.emit('login',{
        name:$('#login-inp').val()
    })

    $('#login').hide();
    $('#chat').show();
})

$('#send-btn').click(()=>{
    socket.emit('send',{
        msg:$('#text').val()
        
    })

    $('#text').val("");
})

socket.on('recieved',(data)=>{
    $('#list').append(`<li><strong>${data.name}</strong>: ${data.msg}</li>`)
})