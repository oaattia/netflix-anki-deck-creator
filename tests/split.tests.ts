import {getSubtitle} from '../src/split';

test('test should split string', () => {
   const words = getSubtitle('foo bar');
   expect(words[0]).toEqual('foo');
   expect(words[1]).toEqual('bar');
});


test('test should split string with characters', () => {
   const words = getSubtitle('.,,foo$ bar%');
   expect(words[0]).toEqual('foo');
   expect(words[1]).toEqual('bar');
});