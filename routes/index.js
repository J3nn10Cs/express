import express from 'express'
import { pageStart,pageTestimonials,pageTravels,pageUs } from '../controllers/controllerPage.js';
const router = express.Router();

router.get('/',pageStart)

router.get('/nosotros',pageUs)

router.get('/testimoniales', pageTestimonials)

router.get('/viajes', pageTravels)

export default router