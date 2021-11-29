
// const user = "jdeng11244@gmail.com:2%MapUhxMjYAS6";
// const buffer = Buffer.from(user);
// const encodedUser = buffer.toString('base64');

const encodedUser = Buffer.from("jdeng11244@gmail.com:2%MapUhxMjYAS6").toString("base64");

//I realize this is not best practice. Normally I would have this in an environment variable, but the hosting service I was using is having issues. I will remove this once I get my project properly hosted.


module.exports = encodedUser;
