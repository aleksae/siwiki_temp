import { Router, Request, Response } from 'express';

const router = Router();

/**
 * ruta vraća sve predmete i niz gde su informacije o držanju
 */
router.get('/subjects/all', /**poziv odgovarajuce metode kontrolera*/);

/**
 * ruta vraća sve predmete i niz gde su informacije o držanju za kriterijume, ako kroterijum fali ili je -1, vracaju se sve vrednosti za taj kriterijum
 */
router.get('/subjects/:study_program_id/:semester', /**poziv odgovarajuce metode kontrolera*/);

/**
 * ruta vraća sve nastavnike
 */
router.get('/teachers/all', /**poziv odgovarajuce metode kontrolera*/);

/**
 * ruta vraća sve predmete koje drzi nastavnik
 */
router.get('/subjects/:teacher', /**poziv odgovarajuce metode kontrolera*/);