import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint response', () => {
  it('get the endpoint of the api', async () => {
    const response = await request.get(
      '/app?title=encenadaport.jpg&&width=850&&height=500'
    );
    expect(response.status).toBe(200);
  });
});
