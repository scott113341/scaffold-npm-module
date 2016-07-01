const test = require('tape');

const something = require('../something.js');


test('something', t => {
  t.equal(something(), 'something');
  t.end();
});
