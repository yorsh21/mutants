const request = require('supertest');
const app = require('./../index');

describe('GET /', () => {
    test('GET responds to root path', async () => {
      const response = await request(app).get('/');

      expect(response.statusCode).toBe(200);
    });
});


describe('GET /stats', () => {
    test('GET responds with success code', async () => {
        const response = await request(app).get('/stats');

        expect(response.body).toHaveProperty('count_mutant_dna');
        expect(response.body).toHaveProperty('count_human_dna');
        expect(response.body).toHaveProperty('ratio');
    });
});


describe('POST /mutant', () => {
    //Caso True
    test('POST responds with success code', async () => {
        const response = await request(app).post('/mutant').send({
            "dna": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
        });
        
        expect(response.statusCode).toBe(200);
    });

    //Caso False
    test('POST responds with success code', async () => {
        const response = await request(app).post('/mutant').send({
            "dna": ["ATGCGA","CAGTGC","TTCTGT","AGAAGG","CTCCTA","TCACTG"]
        });
        
        expect(response.statusCode).toBe(403);
    });
});