import express from 'express'
import { pageStart,pageTestimonials,pageTravels,pageUs, tripDetailPage } from '../controllers/controllerPage.js';
import { saveTestimonial } from '../controllers/testimonialController.js';
const router = express.Router();

router.get('/',pageStart)

router.get('/uspage',pageUs)

router.get('/testimonialspage', pageTestimonials)
router.post('/testimonialspage', saveTestimonial)

router.get('/travelpage', pageTravels)

router.get('/travelpage/:travels',tripDetailPage)

export default router