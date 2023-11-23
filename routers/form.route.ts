import { Router, Request, Response } from 'express';

const router = Router();

/**
 * ruta vraća JSON objekat sa nizom formi i pripadajucim pitanjima
   response
   {
    [
        form name, description, creator
        array of questions that form has with all data from questions table for each question
    ]
   }
 */
router.get('/all', /**poziv odgovarajuce metode kontrolera*/);

/**
 * isti format kao za all, samo vraća jednu formu, onu ciji je id prosledjen. U slucaju da forme nema, vraca se prazan json
 */
router.get('/form/:id', /**poziv odgovarajuce metode kontrolera*/);

/**
 * isti format kao za all, samo vraća jednu formu, onu cije je ime prosledjeno. U slucaju da forme nema, vraca se prazan json
 */
router.get('/form/:name', /**poziv odgovarajuce metode kontrolera*/);

/**
 * vraća niz odgovara za onu formu ciji je id prosledjen (format kao jedan clan niza u all delu, dakle bez uglastih zagrada). U slucaju da nema odgovora, niz za odgovre je prazan
 * prosleđuju se svi podaci iz form_answers za odgovore, kao po potrebi i informacije o skrivenosti (hint LEFT/RIGHT JOIN)
 */
router.get('/form/responses/:id', /**poziv odgovarajuce metode kontrolera*/);

/**
 * vraća statistiku za brojcana pitanja (has_options=TRUE) za datu formu (koliko je ljudi dali odgovor na koje pitanje u vrednosti i procentu za svako pitanje)
 * primer:
   {
    "form_id": 1,
    "stats": [
        {
            "question_id": 1,
            "content": "Da li je nastavnik redovno drzao predavanja",
            "responses": {
                "Da": [
                    10,
                    66.67
                ],
                "Ne": [
                    5,
                    33.33
                ]
            }
        },
        {
            "question_id": 2,
            "content": "Ocenite kvalitet materijala",
            "responses": {
                "1": [
                    1,
                    6.67
                ],
                "2": [
                    2,
                    13.33
                ],
                "3": [
                    2,
                    13.33
                ],
                "4": [
                    1,
                    6.67
                ],
                "5": [
                    7,
                    60
                ]
            }
        }
    ]
    }
 */
router.get('/form/responses/stats/:id', /**poziv odgovarajuce metode kontrolera*/);


/**
 * u telu ce biti prosledjne informacije o id_forme, kao i niz pitanja gde je kljuc id pitanja a vrednost odgovor na pitanje
 */
router.post('/form/responses/create', /**poziv odgovarajuce metode kontrolera*/);

/**
 * u telu ce biti prosledjne informacije o id_forme, kao i niz pitanja gde je kljuc id pitanja a vrednost odgovor na pitanje
 */
router.put('/form/responses/update', /**poziv odgovarajuce metode kontrolera*/);

/**
 * vraca reakcije za dati odgovor na formu za zadatog autora
 */
router.get('/form/responses/reactions/:form_id/:author_id', /**poziv odgovarajuce metode kontrolera*/);

/**
 * kreira/(azurira postoje ako postoji) rekaciju na formu, kroz telo se prosledjuju form_id, autor odgovora kao i reakcija
 */
router.post('/form/responses/reactions/react', /**poziv odgovarajuce metode kontrolera*/);

/**
 * kreira prijavu za odgovor, kroz telo se prosledjuje form_id kao i autor odgovora, podrazumevani status za report je sent.
 */
router.post('/form/responses/reports/create', /**poziv odgovarajuce metode kontrolera*/);

export default router;