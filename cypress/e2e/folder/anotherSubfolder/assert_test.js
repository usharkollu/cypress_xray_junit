/// <reference types = "cypress"/>

describe("test", () => {
    it("testcase", { jiraKey: 'efg' }, () => {
        expect(2).to.be.greaterThan(4);
    })
})