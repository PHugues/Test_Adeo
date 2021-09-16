const { data } = require("../data");
const { mockedFilter } = require("./mockedData");
const { filterAnimals } = require("../app");

describe("Filter", () => {
    test("it should return the mocked data with the filter ry (e.g. Deux countries with one people each)", () => {
        let filteredData = filterAnimals(data, "ry");
        expect(filteredData).toEqual(mockedFilter.mockedFilterRy);
    });

    test("it should return the mocked data with the filter Anoa (e.g. One country with one people)", () => {
        let filteredData = filterAnimals(data, "Anoa");
        expect(filteredData).toEqual(mockedFilter.mockedFilterAnoa);
    });

    test("it should return the mocked data with the filter toto (e.g. empty array)", () => {
        let filteredData = filterAnimals(data, "toto");
        expect(filteredData).toEqual(mockedFilter.mockedFilterToto);
    });
});