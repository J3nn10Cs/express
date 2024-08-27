import express  from 'express'
import router from './routes/index.js';

const app = express();

//Defibir puerto
const port = process.env.port || 4000;

//Habiliar pug
app.set('view engine','pug');

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})