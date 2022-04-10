// import supertest from 'supertest';
import processFunction from '../utilities/sharp';

describe('Test sharp function response', () => {
  it('test image processing', async () => {
    let title: string = 'santamonica.jpg';
    let width: string = '750';
    let height: string = '450';
    expect(await processFunction(title, width, height)).toContain(
      `out_${width}_${height}_${title}`
    );
  });
});
