// 6.	Convert object to array using Object.entries()
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

Object.entries(user).forEach(i => {
    console.log(i[0],":",i[1]);
});