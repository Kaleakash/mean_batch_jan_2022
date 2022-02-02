import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    let bb = new Book(1,100,"Angular","Google",120,"2010","112233");
    expect(bb).toBeTruthy();
  });
});
