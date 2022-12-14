const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
const { test } = require('@jest/globals');

test('creates an engineer object', () => {
    const engineer = new Engineer('Engineer#1');

    expect(typeof(engineer)).toBe('object');
});

test('gets github username', () => {
    const engineer = new Engineer('Manager', '1', 'carlos@email.fr', 'Carlosgithub');

    expect(engineer.github).toBe('Carlosgithub');
});

test('getRole() returns Engineer', () => {
    const engineer = new Engineer('Manager#1');

    expect(engineer.getRole()).toBe('Engineer');
});
