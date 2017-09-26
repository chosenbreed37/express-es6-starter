import rest from 'restler';
import test from 'ava';

const base = 'http://localhost:3000';

test('can get all quotes', t => {
    rest.get(base + '/api/quotes')
        .on('success', (data) => {
            t.true(data.length > 0);
        });
});
