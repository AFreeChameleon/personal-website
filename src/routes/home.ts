import express, {Router, Request, Response} from 'express';
import * as homeController from '../controllers/home';
export const router: Router = Router();

router.get('/', homeController.GetHome);
router.get('/cv', homeController.GetCV);
router.post('/contact', homeController.PostEmail);
