const info = {
    name: "Robin",
    lastName: "Hood",
    age: 32,
    height: 175,
    isDeveloper: false
};

const age = info.age;

const array = [
    {
        ...info
    }, {
        name: "Little",
        lastName: "John",
        age: 30,
        height: 185,
        isDeveloper: false,
    }, {
        name: "Fray",
        lastName: "Tuck",
        age: 40,
        height: 167,
        isDeveloper: true
    }
];

const orderedArray = array.sort((a, b) => b.age - a.age);
console.log(orderedArray);
