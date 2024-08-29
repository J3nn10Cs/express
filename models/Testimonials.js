import { Sequelize } from "sequelize";
import db from '../config/database.js';

export const Testimonials = db.define('testimoniales',{
    name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    }
})