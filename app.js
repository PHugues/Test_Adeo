const { data } = require("./data.js");
const util = require("util");

// Get only real arguments and not script name
const args = process.argv.slice(2);

let result;
if (args[0] && args[0].startsWith("--filter")) {
    // Filter
    let filter = args[0].split("=")[1];

    result = filterAnimals(data, filter);
} else if (args[0] && args[0].startsWith("--count")) {
    // Count

    result = countAnimalsAndPeople(data);
}

console.log(util.inspect(result, false, null, true));


function filterAnimals(data, filter) {
    // Filter the array to include only the filter given
    let filteredData = data.reduce((filteredCountries, country) => {

        // Reduce the peoples array of animals to include the filter
        let newCountry = {
            name: country.name,
        };
        newCountry.people = country.people.reduce((filteredPeople, people) => {
            let filteredAnimals = people.animals.filter((animal) =>
                animal.name.includes(filter)
            );

            // Check number of animals after applying the filter, if at least one, we keep it
            if (filteredAnimals.length > 0) {
                filteredPeople.push({
                    name: people.name,
                    animals: filteredAnimals,
                });
            }

            return filteredPeople;
        }, []);

        // Check number of people, if at least one matches the filter, we keep it
        if (newCountry.people.length > 0) {
            filteredCountries.push(newCountry);
        }
        return filteredCountries;
    }, []);

    return filteredData;
}

function countAnimalsAndPeople(data) {
    // Remap the array to add the count of each people/animals
    let countedData = data.map((country) => ({
        name: `${country.name} [${country.people.length}]`,
        people: country.people.map((people) => ({
            name: `${people.name} [${people.animals.length}]`,
            animals: people.animals,
        })),
    }));

    return countedData;
}

module.exports = {
    filterAnimals,
    countAnimalsAndPeople,
};