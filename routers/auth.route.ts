import { Router, Request, Response } from 'express';

const router = Router();

/**
 * ruta vraća JSON objekat sa parametrom message o uspešnosti i odgovarajućim standardnim statusom. U slučaju uspešne prijave, kroz cookie se vraćaju JWT informacije.
 * ruta prima resposne koji joj prosledi AZURE Oauth servis
 */
router.get('/login', /**poziv odgovarajuce metode kontrolera*/);

/**
 * ruta vraća JSON objekat sa parametrom message o uspešnosti i odgovarajućim standardnim statusom.
 */
router.get('/logout', /**poziv odgovarajuce metode kontrolera*/);


export default router;