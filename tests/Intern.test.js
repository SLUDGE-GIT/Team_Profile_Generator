const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Should create Intern as an object", () => {
        const e = new Intern();
        expect(typeof(e)).toBe("object");
    });

    describe("getSchool", () => {
        it("Should return input for school from method", () => {
            const school = "Webster University";
            const e = new Intern("MR TEST", 123, "test@test.com", school);
            expect(e.getSchool()).toBe(school);
        });
    });
    describe("getRole", () => {
        it("Should return 'Intern' from getRole method", () => {
            const testValue = "Intern";
            const e = new Intern("MR TEST", 123, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
});
