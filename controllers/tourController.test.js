const request = require('supertest');
const app = require('../app');
const {
    mongoConnect,
    mongoDisconnect,
} = require('../utils/server');

describe('Tours API', () => {
    beforeAll(async () => {
        await mongoConnect();
    });

    afterAll(async () => {
        await mongoDisconnect();
    });

    describe('Test get ', () => {
        test('It should respond with 200 success', async () => {
            const response = await request(app).get('/api/v1/tours').expect('Content-Type', /json/).expect(200);
        });
    });

});