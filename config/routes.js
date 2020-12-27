const users = require('../app/controllers/users');
const auth = require('../app/controllers/auth');
module.exports = (app) => {

  app.get('/users',users.getAll);
  app.post('/users',users.create);
  app.put('/users/:id',users.edit);
  app.delete('/users/:id',users.remove);

  //auth
  app.post('/signin', auth.signIn);
};
