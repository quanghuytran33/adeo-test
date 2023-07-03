import DataService from "../DataService.js";
import assert from "assert";

const dataService = new DataService();

describe("DataService count", function () {
    it("check first and second level", function () {
        const actual = dataService.returnDataWithCountNumber();
        assert.equal("Dillauti[5]", actual[0].name);
        assert.equal("Winifred Graham[6]", actual[0].people[0].name)
    })
})

describe("DataService filter", function () {
    const actual = dataService.filterCountryHavingAnimal("ry");
    it("check number element at all level", function () {
        assert.equal(2, actual.length);
        assert.equal(1, actual[0].people.length);
        assert.equal(1, actual[1].people[0].animals.length);
        assert.equal(1, actual[1].people.length);
        assert.equal(1, actual[1].people[0].animals.length);
    })
    it('should return Dory and Oryx', function () {
        assert.equal("John Dory", actual[0].people[0].animals[0].name);
        assert.equal("Oryx", actual[1].people[0].animals[0].name);
    });
})

