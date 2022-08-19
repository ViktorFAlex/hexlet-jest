import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('')).toEqual('');
  expect(reverse('hello')).toEqual('olleh');
});