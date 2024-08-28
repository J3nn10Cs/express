import { Travel } from "../models/Travel.js"

const pageStart = (req,res) => {
    res.render('home_page',{
        page: 'Inicio'
    })
}

const pageUs = (req,res) => {
    res.render('uspage',{
        page: 'Nosotros'
    })
}

const pageTravels = async (req,res)=> {

    // consultar bd
    const travels = await Travel.findAll() 
    console.log(travels); 

    res.render('travelpage',{
        page: 'Viajes'
    })
}

const pageTestimonials = (req,res) => {
    res.render('testimonialspage',{
        page: 'Testimoniales'
    })
} 

export{
    pageStart,
    pageUs,
    pageTravels,
    pageTestimonials
}