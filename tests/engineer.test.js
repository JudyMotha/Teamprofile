const Engineer = require("../lib/engineer");

test("Testing for  Engineer Role", () => {
    const testValue = "Engineer";
    const dEmployee = new Engineer("Liya", 289, "Liya@gmail.com", testValue);
    expect(dEmployee.getRole()).toBe(testValue);
});

test("Testing for GitHub account", () => {
    const testValue = "GHA";
    const dEmployee = new Engineer("Liya", 289, "Liya@gmail.com", testValue);
    expect(dEmployee.getGitHub()).toBe(testValue);
});

test("Testing  GitHub acc", () => {
    const testValue = "GitHubUser";
    const dEmployee = new Engineer("Blank", 289, "blank@gmail.com", testValue);
    expect(dEmployee.github).toBe(testValue);
});

