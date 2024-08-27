import express from 'express'
const router = express.Router();

router.get('/', (req,res) => { //request lo que enviamos - response express responde
    res.render('Inicio')
})

router.get('/nosotros', (req,res) => {

    const travel = 'Viaje a Alemania'

    //para pasar vistas
    res.render('Nosotros',{
        // textTravel : travel
        travel
    })
})

export default router