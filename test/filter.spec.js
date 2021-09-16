const { data } = require("../data");
const { mockedFilter } = require("./mockedData");
const { filterAnimals } = require("../app");

describe("Count", () => {
    test("Filter --ry", () => {
        let countedData = filterAnimals(data, "ry");
        expect(countedData).toEqual(mockedFilter);
    });
});