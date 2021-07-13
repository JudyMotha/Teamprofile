const Manager = require("../lib/Manager");
test('Test for role Manager', () => {
    const testValue = "Manager";
    const dEmployee = new Manager("Liya", 289, "Liya@gmail.com", testValue);
    expect(dEmployee.getRole()).toBe(testValue);
});


test("Test for  office number", () => {
    const testValue = 106;
    const dEmployee = new Manager("Liya", 289, "Liya@gmail.com", testValue);
    expect(dEmployee.getOfficeNumber()).toBe(testValue);
});
