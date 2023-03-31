const request = require('supertest');
const app = require('../app');
const {
    mongoConnect,
    mongoDisconnect,
} = require('../utils/server');

describe('Users API', () => {
    beforeAll(async () => {
        await mongoConnect();
    });

    afterAll(async () => {
        await mongoDisconnect();
    });

    describe('Test GET /users', () => {
        test('It should respond with 200 success', async () => {
            const response = await request(app)
                .get('/api/v1/users')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    });

    describe('Test GET /tours', () => {
        test('It should respond with 200 success', async () => {
            const response = await request(app).get('/api/v1/tours').expect('Content-Type', /json/).expect(200);
        });
    });

});