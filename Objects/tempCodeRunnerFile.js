// 9.	Use optional chaining to safely access deep values

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

console.log(user.address?.location?.lat);