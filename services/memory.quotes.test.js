import test from 'ava';
import service from './memory.quotes';

test('Can get all quotes', async t => {
    const quotes = await service.getAll();
    t.true(quotes.length > 0);
});
