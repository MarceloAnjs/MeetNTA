const db = require("../models");
const User = db.user;
const bcrypt = require("bcryptjs");

module.exports = {
  getAll,
  getById,
  update,
  create,
  gotOffline,
}

async function getAll() {
  return await User.find({},{ password: 0 });
}

async function getById(id) {
  return await User.findById(id,{ password: 0 });
}

async function create(userParam) {
  // validate
  if (await User.findOne({ email: userParam.email })) {
    throw new Error("User already exists!");
  }

  const user = new User(userParam);

  // hash password
  if (userParam.password) {
      user.password = bcrypt.hashSync(userParam.password, 10);
  }



  // save user
  await user.save();
}

async function update(userParam) {
  const id = userParam.token;
  const user = await User.findOne({ _id: userParam._id });
  
  if (!user) {
    throw new Error("User not found!");
  }
  
  // hash password
  if (userParam.password) {
    userParam.password = await bcrypt.hashSync(userParam.password, 10);
}

  Object.assign(user, userParam);
  // save user
  await user.save();
}

async function gotOffline(socketId){
  const user = await User.findOne({ socketId: socketId });
  
  if (!user) {
    throw new Error("User not found!");
  }

  Object.assign(user, {
    socketId: null,
    isOnline: false
   });
  // save user
  await user.save();
}
