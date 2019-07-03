const sut = require('./xkcd');

describe('#findComicId', () => {
  it('should find a comic ID by query', () => {
    return expect(sut.findComicId('workflow')).resolves.toBeTruthy();
  });
});

describe('#getComic', () => {
  it('should find a comic image URL', () => {
    return expect(sut.getComic('workflow')).resolves.toMatch(
      /https.*imgs.*png/
    );
  });
});
