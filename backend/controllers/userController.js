const userService = require("../user/userService")

exports.create = (req, res, next) => {
  userService.create(req.body)
      .then(() => res.json({message: 'User created'}))
      .catch(err => next(err));
}
exports.getAll = (req, res) => {
  userService.getAll()
      .then(users => res.json(users))
      .catch(err => next(err));
}

exports.getById = (req, res, next) => {
  userService.getById(req.params.id)
      .then(user => user ? res.json(user) : res.sendStatus(404))
      .catch(err => next(err));
}

exports.update = (req, res, next ) => {
  userService.update( req.body )
      .then(() => res.json({message: 'User updated'}))
      .catch(err => next(err));
}

exports.gotOffline = (socketId) => {
  userService.gotOffline(socketId)
      .catch((err) => console.log(err));
};
