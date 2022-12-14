const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test("gets employee's name", () => {
    const employee = new Employee('Employee#1');

    expect(employee.getName()).toBe('Employee#1');
});

test("gets employee's id", () => {
    const employee = new Employee('Employee#1', '1');

    expect(employee.getId()).toBe('1');
});

test("get employee's email", () => {
    const employee = new Employee('Employee#1', '1', 'aperson@email.fr');

    expect(employee.getEmail()).toBe('aperson@email.fr');
});

test("getRole() returns Employee", () => {
    const employee = new Employee('Employee');

    expect(employee.getRole()).toBe('Employee');
});