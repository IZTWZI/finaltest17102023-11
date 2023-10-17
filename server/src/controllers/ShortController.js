const { Short } = require("../models");
module.exports = {
  // get all user
  async index(req, res) {
    try {
      const users = await Short.findAll();
      res.send(users);
    } catch (err) {
      res.status(500).send({
        error: "The users information was incorrect",
      });
    }
  },
  // create user
  async create(req, res) {
    try {
      const user = await Short.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      res.status(500).send({
        error: "Create user incorrect",
      });
    }
  },
  // edit user, suspend, active
  async put(req, res) {
    try {
      await Short.update(req.body, {
        where: {
          id: req.params.userId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Update Short incorrect",
      });
    }
  },
  // delete user
  async remove(req, res) {
    try {
      const user = await Short.findOne({
        where: {
          id: req.params.userId,
        },
      });

      if (!user) {
        return res.status(403).send({
          error: "The Short information was incorrect",
        });
      }

      await user.destroy();
      res.send(user);
    } catch (err) {
      res.status(500).send({
        error: "The Short information was incorrect",
      });
    }
  },

  // get user by id
  async show(req, res) {
    try {
      const user = await Short.findByPk(req.params.userId);
      res.send(user);
    } catch (err) {}
  },
};
