const { data } = require("../data");
const { mockedCount } = require("./mockedData");
const { countAnimalsAndPeople } = require("../app");

describe("Count", () => {
    test("it should return the mocked data for dillauti (e.g. 5 people)", () => {
        let countedData = countAnimalsAndPeople(data);
        expect(countedData[0]).toEqual(mockedCount);
    });
});