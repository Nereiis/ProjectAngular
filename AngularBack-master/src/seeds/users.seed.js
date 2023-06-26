const User = require('../api/models/user.model');
const mongoose = require('mongoose');

const arrayUsers = [
    
    {
        "email": "nerea@gmail.com",
        "password": "Nerea123$",
        "role": "admin"
    },
    {
        "email": "xavi@gmail.com",
        "password": "Xavi123$",
        "role": "admin"
    },
    {
        "email": "bogdan@gmail.com",
        "password": "Bogdan123$",
        "role": "admin"
    },
    {
        "email": "rodrigo@gmail.com",
        "password": "Rodrigo123$",
        "role": "admin"
    },

]


mongoose.connect('mongodb+srv://root:root@cluster0.8phs6yk.mongodb.net/MyAPI?retryWrites=true&w=majority')
.then(async () => {
    const allusers = await User.find()
    if(allusers.length > 0){
        await User.collection.drop()
        console.log('usuarios borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const usuariosMap = arrayUsers.map((user) => new User(user))
    await User.insertMany(usuariosMap)
    console.log('usuarios añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());