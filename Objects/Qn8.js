// 8.	Create a deep copy of an object with nested structure
let user = {
    address: {
        city: "MuzaffarPur",
        state: "Bihar"
    },
    location: {
        lat:23.5,
        lng:76.5
    },
};

let deepCopy = JSON.parse(JSON.stringify(user));
console.log(deepCopy);