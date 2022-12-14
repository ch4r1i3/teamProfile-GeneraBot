const Employee = require('..lib/Employee');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Intern#1');
    
    expect(typeof(intern)).toBe('object');
});

test("gets Intern's school", () => {
    const intern = new Intern('Intern#1', '2', 'email', 'school#1');

    expect(intern.school).toBe('school#1');
});

test('getRole() returns Intern',() => {
    constintern = new Intern('Intern');

    expect(intern.getRole()).toBe('Intern');;

});