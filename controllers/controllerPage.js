import { where } from "sequelize"
import { Travel } from "../models/Travel.js"
import { Testimonials } from "../models/Testimonials.js"

const pageStart = async (req,res) => {
    //Consultar 3 viajes del modelo viajes
    const promiseDB = [];

    promiseDB.push(await Travel.findAll({limit:3}));
    promiseDB.push(await Testimonials.findAll({limit:3}));
    try {
        const result = await Promise.all(promiseDB);
        res.render('home_page',{
            page: 'Inicio',
            clase: 'home',
            travels: result[0],
            testimonials: result[1]
        })
    } catch (error) {
        console.log(error);
    }
}

const pageUs = (req,res) => {
    res.render('uspage',{
        page: 'Nosotros'
    })
}

const pageTravels = async (req,res)=> {
    // consultar bd
    const travels = await Travel.findAll() 
    res.render('travelpage',{
        page: 'Viajes',
        travels
    })
}

//Muestra un viaje por su slug
const tripDetailPage = async (req,res) => {
    const {travels} = req.params
    try {
        //traer solo el slug seleccionado
        const result = await Travel.findOne({ where : {slug:travels}})
        res.render('travel',{
            page: 'Informacion Viaje',
            result
        })
    } catch (error) {
        console.log(error);
    }
}

//Pagina testimoniales
const pageTestimonials = async (req,res) => {
    try {
        const testimonials = await Testimonials.findAll();
        res.render('testimonialspage',{
            page: 'Testimoniales',
            testimonials
        })
    } catch (error) {
        console.log(error);
    }
} 

export{
    pageStart,
    pageUs,
    pageTravels,
    pageTestimonials,
    tripDetailPage
}