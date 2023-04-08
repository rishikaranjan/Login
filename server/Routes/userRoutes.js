import express from "express";
import User from "../Models/userModel.js";
import bcrypt from 'bcryptjs';



const userRouter = express.Router();


userRouter.post(
    '/login',
    async (req, res) => {

      const user = await User.findOne({ username: req.body.username });

      
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(201).json({message: 'Correct credentials', username: user.username});
          return;
        }
      }

      res.json({ message: 'Incorrect Credentials' });
      
    }

  );



userRouter.post(
    '/register',
    async (req, res) => {

        const newUser = new User({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password),

        });

        const user = await newUser.save();

        res.status(201).json({username: user.username,});

    }

);








export default userRouter;