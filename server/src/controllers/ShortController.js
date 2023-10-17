const { Short } = require("../models");
module.exports = {
  // get all user
  async index(req, res) {
    try {
      const shorts = await Short.findAll();
      res.send(shorts);
    } catch (err) {
      res.status(500).send({
        error: "The shorts information was incorrect",
      });
    }
  },
  // create user
  async create(req, res) {
    try {
      const short = await Short.create(req.body);
      res.send(short.toJSON());
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
          id: req.params.shortId,
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
      const short = await Short.findOne({
        where: {
          id: req.params.shortId,
        },
      });

      if (!short) {
        return res.status(403).send({
          error: "The Short information was incorrect",
        });
      }

      await short.destroy();
      res.send(short);
    } catch (err) {
      res.status(500).send({
        error: "The Short information was incorrect",
      });
    }
  },

  // get user by id
  async show(req, res) {
    try {
      const short = await Short.findByPk(req.params.shortId);
      res.send(short);
    } catch (err) {}
  },
};
