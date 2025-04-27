const { hello } = require('./index');

test('returns correct greeting', () => {
    expect(hello()).toBe('Hello, World!');
});

// Przykład dodatkowego testu negatywnego
test('does not return wrong greeting', () => {
    expect(hello()).not.toBe('Hi!');
});