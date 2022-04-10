import cachFunction from '../utilities/cached';

describe('Test caching response', () => {
  let title: string = 'santamonica.jpg';
  let width: string = '750';
  let height: string = '450';

  it('image has not been cached for first time call', () => {
    expect(cachFunction(title, width, height)).toBeFalsy();
  });
  it('image was cached on second time call', () => {
    expect(cachFunction(title, width, height)).toBeTruthy();
  });
});
