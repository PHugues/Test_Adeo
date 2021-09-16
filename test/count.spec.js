const { data } = require("../data");
const { mockedCount } = require("./mockedData");
const { countAnimalsAndPeople } = require("../app");

describe("Count", () => {
    test("Dillauti [5]", () => {
        let countedData = countAnimalsAndPeople(data);
        expect(countedData[0]).toEqual(mockedCount);
    });
});