/// <reference types = "cypress"/>

describe("test", () => {
    it("testcase", { jiraKey: 'QAA-3897' }, () => {
        expect(2).to.be.greaterThan(4);
    })
})