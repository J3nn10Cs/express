import { Testimonials } from "../models/Testimonials.js";

const saveTestimonial = async (req,res) => {
    ///Validar campos
    const {name,email,message} = req.body;

    const error = []

    if(name.trim() === ''){
        error.push({message: 'El nombre está vacio'});
    }
    if(message.trim() === ''){
        error.push({message: 'El mensaje está vacio'})
    }
    if(email.trim() === ''){
        error.push({message: 'El email está vacio'})
    }

    if(error.length>0){
        //consultar testimnoniales
        const testimonials = await Testimonials.findAll();
        //Mostrar la vista de errores
        res.render('testimonialspage',{
            page: 'Testimoniales',
            error,
            //para que se mantengan los datos
            name,
            email,
            message,
            testimonials
        })
    }else{
        //almacenarlo en la bd
        try {
            await Testimonials.create({
                name,
                email,
                message
            })
            res.redirect('/testimonialspage');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    saveTestimonial
}