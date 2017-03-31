const test = ('tape');

const something = ('../something.js');

test('something', t => {
  t.equal(something(), 'something');
  t.end();
});
