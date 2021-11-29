
// const user = "jdeng11244@gmail.com:2%MapUhxMjYAS6";
// const buffer = Buffer.from(user);
// const encodedUser = buffer.toString('base64');

const encodedUser = Buffer.from("jdeng11244@gmail.com:2%MapUhxMjYAS6").toString("base64");

console.log(encodedUser);

module.exports = encodedUser;
