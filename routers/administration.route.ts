import { Router, Request, Response } from 'express';

const router = Router();

/**
 * kreira formu, podaci u body su ime i opis
 * 
 * ADMIN
 */
router.post('/manage/forms/create', /**poziv odgovarajuce metode kontrolera*/);


/**
 * azurira formu, podaci u body ime i opis
 * 
 * ADMIN
 */
router.put('/manage/forms/update', /**poziv odgovarajuce metode kontrolera*/);

/**
 * Kreira pitanje. podaci u body content, niz opcija. Ako je niz prazan, has_options je false, inace true. Dodatno sadrzi niz identifikatora formi kojima ce ovo pitanje biti dodeljeno. Ako pitanje vec pripada formi, ignorisati taj unos.
 * 
 * ADMIN
 */
router.post('/manage/questions/create', /**poziv odgovarajuce metode kontrolera*/);

/**
 * Azurira pitanje. podaci u body content, niz opcija. Ako je niz prazan, has_options je false, inace true. Dodatno sadrzi niz identifikatora formi kojima ce ovo pitanje biti dodeljeno. Ako pitanje vec pripada formi, ignorisati taj unos.
 * 
 * ADMIN
 */
router.put('/manage/questions/update', /**poziv odgovarajuce metode kontrolera*/);


/**
 * sakriva odgovor, podaci u body su razlog, kao i koja forma kog autora se skriva
 * 
 * ADMIN, MODERATOR
 */
router.post('/manage/responses/hide', /**poziv odgovarajuce metode kontrolera*/);

/**
 * otkriva skriven odgovor, podaci u body hidden_id.
 * 
 * ADMIN, MODERATOR
 */
router.delete('/manage/responses/delete_hidden', /**poziv odgovarajuce metode kontrolera*/);



/**
 * blokira korisnika, user_id je u body.
 * 
 * ADMIN
 */
router.post('/manage/users/block', /**poziv odgovarajuce metode kontrolera*/);


