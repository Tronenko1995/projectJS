console.dir([1,2,3]);

const solier = {
    health: 100,
    armor: 100,
    speed: 1,
    jump: 1
}

const jonh = Object.create(solier);

// const jonh = {
//     health: 100
// };

jonh.health = 200;

const bobi = {
    speed: 3
}

// jonh.__proto__ = solier;
// Object.setPrototypeOf(jonh,solier)
console.dir(jonh.armor)