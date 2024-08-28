const pageStart = (req,res) => {
    res.render('inicio',{
        page: 'Inicio'
    })
}

const pageUs = (req,res) => {
    res.render('nosotros',{
        page: 'Nosotros'
    })
}

const pageTravels = (req,res)=> {
    res.render('viajes',{
        page: 'Viajes'
    })
}

const pageTestimonials = (req,res) => {
    res.render('testimoniales',{
        page: 'Testimoniales'
    })
} 

export{
    pageStart,
    pageUs,
    pageTravels,
    pageTestimonials
}