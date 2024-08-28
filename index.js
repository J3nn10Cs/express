import express  from 'express'
import router from './routes/index.js';
import db from './config/database.js';

const app = express();

//Conectar la bd
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch(error =>  console.log(error))

//Defibir puerto
const port = process.env.port || 4000;

//Habiliar pug
app.set('view engine','pug');

//Obtener el año actual
app.use( (req,res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.webSite = 'Travel Agency'
    next()
} )

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})