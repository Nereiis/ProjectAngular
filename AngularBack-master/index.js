const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const documentacion = require('./src/doc/index.json');

const userRouter = require('./src/api/routes/user.routes');
const cruceroRouter = require('./src/api/routes/crucero.routes');
const escapadaRouter = require('./src/api/routes/escapada.routes');
const islaRouter = require('./src/api/routes/isla.routes');
const spaRouter = require('./src/api/routes/spas.routes');
const searchRouter = require('./src/api/routes/search.routes');
const {connect} = require('./src/utils/db');
const { isAuth } = require('./src/middlewares/auth');
const PORT = process.env.PORT;


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  });
const app = express();
connect();

//VAMOS A PONER DE RESPUESTA
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, PATCH'); //Decimos que metodos tenemos permitidos
  res.header('Access-Control-Allow-Credentials', 'true'); //permitimos la conexión con credenciales(Bearer token)
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // permitimos los headers del tipo Content-Type
  next();
})

//VAMOS A CONFIGURAR LOS CORS
//CORS --> CORS ORIGIN RESOURCE SHARING --> Intercambio de recursos cruzados -> manera de permir el compartir recursos enntre distintos origenes
app.use(cors(
  {
    // origin: ["http://localhost:3000","http://localhost:4200","http://127.0.0.1:5500"],  //si sabemos origenes podemos ponerlos en un array
    origin: "*", // permito todas las conexiones
    credentials: true
  }
))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/users', userRouter);
app.use('/cruceros', cruceroRouter);
app.use('/escapadas', escapadaRouter);
app.use('/islas', islaRouter);
app.use('/spas', spaRouter);
app.use('/search', searchRouter);





app.use('/', (req, res) => {
  return res.json("no hay ruta");
})

//ponemos una ruta por si no se encontrase la ruta requerida
app.use('*', (req, res)=>{
  res.status(404).json('Route not found');
})

app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(`Error: ${error.message || "Unexpected error"}`);
})

app.listen(PORT, () => console.log('listening on port', PORT));