const Intern = require("../lib/intern");

test("Test for role Intern", () => {
    const testValue = "Intern";
    const dEmployee = new Intern("Liya", 289, "Liya@gmail.com", testValue);
    expect(dEmployee.getRole()).toBe(testValue);
});

test("Test for school", () => {
    const testValue = "SchoolnameOSU";
    const dEmployee = new Intern("Liya",289, "Liya@gmail.com", testValue);
    expect(dEmployee.getSchool()).toBe(testValue);
});

