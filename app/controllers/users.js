const mongoose = require('mongoose');

const UserConnect = mongoose.model('User');

const getAll = (req,res) => {
  UserConnect.find()
  .exec()
  .then(users => res.json(users))
  .catch(err => res.status(500).json(err));
};

const create = (req,res) => {
  UserConnect.create(req.body)
  .then(createdUser => res.json(createdUser))
  .catch(err => res.status(500).json(err));
};

const edit = (req,res) => {
   UserConnect.findOneAndUpdate({id: req.params.id}, req.body)
  .exec()
  .then(user => req.json(user))
  .catch(err => res.status(500).json(err));
};

const remove = (req, res) => {
   UserConnect.deleteOne({id: req.params.id})
  .exec()
  .then(() => res.json({success:true}))
  .catch(err => res.status(500).json(err));
};

module.exports = {
  getAll,
  create,
  edit,
  remove,
}
