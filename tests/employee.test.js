//Employee.test.js //  Engineer.test.js
//  Intern.test.js
//  Manager.test.js 4 tesst suites under TESTS DIRECTORY
const Employee = require("../lib/employee");
test('Testing for  name', () => {
    const dEmployee = new Employee('Liya', 289, 'Liya@gmail.com');
    expect(dEmployee.getName()).toBe('Liya');
})

test('Testing for  ID', () => {
    const dEmployee = new Employee('Liya', 289, 'Liya@gmail.com');
    expect(dEmployee.getId()).toBe(289);
})

test('Testing for  email address', () => {
    const dEmployee = new Employee('Liya', 289, 'Liya@gmail.com');
    expect(dEmployee.getEmail()).toBe('Liya@gmail.com');
});

