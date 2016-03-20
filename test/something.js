import test from 'tape';

import something from '../src/something';


test('something', t => {
  t.equal(something(), 'something');
  t.end();
});
