const Employee = require("../lib/Employee");


describe("Employee", ()=>{
    it("SHould create Employee as an object", () =>{
        const e = new Employee();
        expect(typeof(e)).toBe("object");
        
    });


    it("Should set the name through construct args",() =>{
        const name = "Moby";
        const e = new Employee(name);
        expect(e.name).toBe(name);

    });

    it("Should set id from construct args", () =>{
        const testId = 123
        const e = new Employee("Zeus",testId);
        expect(e.id).toBe(testId);
    });

    it("Should set email from cronstuct args", () =>{
        const testEmail = "test.test@test.com"
        const e = new Employee("Luna", 123, testEmail);
        expect(e.email).toBe(testEmail);
    });


    describe("getName", () =>{
        it("Should return name from method", () =>{
            const testName = "Rodger";
            const e = new Employee(testName);
            expect(e.getName()).toBe(testName);
        });
     });

    describe("getId", () =>{
        it("Should return id from method", () => {
            const testId = 123;
            const e = new Employee("Gabby", testId);
            expect(e.getId()).toBe(testId);
        });
    });

    describe("getEmail", () => {
        it("Should return email from method", () => {
            const testEmail = "test@test.com";
            const e = new Employee("Kyle", 123, testEmail);
            expect(e.getEmail()).toBe(testEmail);
        
        })
    })
    
    describe("getRole", () =>  {
        it("Should return the role from the method",() =>{
              const role = "Employee";
              const e = new Employee("Sludge", 123, "test@test.com", role);
              expect(e.getRole()).toBe(role);
        });
    
    });
})