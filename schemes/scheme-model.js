const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db("steps")
    .leftJoin("schemes", "schemes.id", "steps.scheme_id")
    .where("schemes.id", "=", id);
}
