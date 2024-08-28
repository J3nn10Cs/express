import express from 'express'
import { pageStart,pageTestimonials,pageTravels,pageUs } from '../controllers/controllerPage.js';
const router = express.Router();

router.get('/',pageStart)

router.get('/uspage',pageUs)

router.get('/testimonialspage', pageTestimonials)

router.get('/travelpage', pageTravels)

export default router