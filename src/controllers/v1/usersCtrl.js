const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    console.log('req body', req.body);
    const hash = await bcrypt.hash(req.body.password, 15);
    console.log('Constraseña generada: ', hash);
    res.send({ status: 'OK', message: 'user create' });
  } catch (error) {
    res.send({ status: 'ERROR', message: error.message });
  }
};

const deleteUser = (req, res) => {
  res.json({ status: 'OK', message: 'user delete' });
};

const getUsers = (req, res) => {
  res.send({ status: 'OK', message: 'user get' });
};

const updateUser = (req, res) => {
  res.json({ status: 'OK', message: 'user update' });
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser
};
