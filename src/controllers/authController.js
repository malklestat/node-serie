const express = require ('express');

const User = require('../model/User');

const router = express.Router();

router.post('/register', async (req, res) =>{
  const { email} = req.body;
  try{
    if (await User.findOne({ email}))
      return res.status(400).send({error: "User Already Exist"});
    
    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ user });
    } catch (err) {

      return res.status(400).send({ error: 'Registration Failed'});
    }
});

module.exports = app => app.use('/auth' , router);