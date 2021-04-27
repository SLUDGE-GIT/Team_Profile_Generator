  
const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Should create Manager as an object", () => {
        const e = new Manager();
        expect(typeof(e)).toBe("object");
    });

    describe("getOfficeNum", () => {
        it("Should return input for officeNumber from method", () => {
            const officeNum = "4345345";
            const e = new Manager("Coffee", 235, "test@test.com", officeNum);
            expect(e.getOfficeNum()).toBe(officeNum);
        });
    });
    describe("getRole", () => {
        it("Should return 'Manager' from getRole method", () => {
            const testValue = "Manager";
            const e = new Manager("Blade", 345, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
});