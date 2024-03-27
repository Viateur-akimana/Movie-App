var viateur = {
    name: "viateur",
    age: 90,
    getDetails: function () {
        return "hello ".concat(viateur.name, " with this age ").concat(viateur.age);
    },
};
console.log(viateur.getDetails());
