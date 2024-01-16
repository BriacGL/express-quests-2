// users.test.js
const request = require('supertest');
const app = require('../src/app');
const database = require('../database');

afterAll(() => database.end());

describe('GET /api/users', () => {
  test('should return status 200 and a list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET /api/users/:id', () => {
  test('should return status 200 and the user with the specified id', async () => {
    const userId = 1; // Assuming user with ID 1 exists in the test database
    const response = await request(app).get(`/api/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', userId);
  });

  test('should return status 404 if the user with the specified id does not exist', async () => {
    const nonExistentUserId = 999; // Assuming there is no user with ID 999 in the test database
    const response = await request(app).get(`/api/users/${nonExistentUserId}`);
    expect(response.status).toBe(404);
  });
});
