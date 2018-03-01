//OBJECT DESTRUCTURING
//
// const person = {
//   name: 'Jams',
//     age: 27,
//     location: {
//       city: 'Almere',
//         temp: 93
//     }
// };
//
//
// const {name, age} = person;
//
//
// console.log(`${name} is ${age}`);
//
//
// const {city: stad, temp} = person.location;
//
//
//
//
// console.log(`${stad} is ${temp}`);

//
//
//
// const book = {
//     title: 'ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//     }
// };
//
//
// const {name: publisherName = "Self-Published"} = book.publisher;
//
// console.log(publisherName);
//
//
//ARRAY DESTRUCTRURING

//
//
// const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','19147'];
//
// const [,city, state = 'New York'] = address;
//
//
// console.log(` You are in ${city} ${state}`);
//
//
// const item = ['Coffee (hot)','2','2.50','2.75'];
//
// const [coffee, , medium] = item;
//
// console.log(`A medium ${coffee} costs ${medium}`);
//
//
