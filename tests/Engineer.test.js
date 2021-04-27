const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Should create engineer as an object", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");

});

describe("getGithub", () => {
    it("Should return user input for github from method", () => {
        const gitHubTest = "Sludge-git";
        const e = new Engineer("Kyle", 123, "test@test.com", gitHubTest);
        expect(e.getGithub()).toBe(gitHubTest);
    });
});

describe("getRole", () => {
    it("should return engineer from getrole method", () => {
        const testRole = "Engineer";
        const e = new Engineer("Wrench", 123, "test@test.com");
        expect(e.getRole()).toBe(testRole);
    });
});

});