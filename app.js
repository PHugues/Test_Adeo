/**
 * @type {Array}
 */
let { data } = require("./data.js");
console.log(data);

// Get only real arguments and not script name
const args = process.argv.slice(2);

if (args[0].startsWith("--filter")) {
    // Filter

    let filter = args[0].split("=")[1];

    // Filter the array to include only the filter given
    data = data.reduce((filteredCountries, country) => {

        // Reduce the peoples array of animals to include the filter
        country.people = country.people.reduce((filteredPeople, people) => {
            people.animals = people.animals.filter((animal) =>
                animal.name.includes(filter)
            );

            // Check number of animals after applying the filter, if at least one, we keep it
            if (people.animals.length > 0) {
                filteredPeople.push(people);
            }

            return filteredPeople;
        }, []);

        // Check number of people, if at least one matches the filter, we keep it
        if (country.people.length > 0) {
            filteredCountries.push(country);
        }
        return filteredCountries;
    }, []);
} else if (args[0].startsWith("--count")) {
    // Count

    // Remap the array to add the count of each people/animals
    data = data.map((country) => ({
        name: `${country.name} [${country.people.length}]`,
        people: country.people.map((people) => ({
            name: `${people.name} [${people.animals.length}]`,
            animals: people.animals,
        })),
    }));
}

console.log(data);

return data;