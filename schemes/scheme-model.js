const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .then((res) => {
      if (res.length === 0) return null;
      return res;
    });
}

function findSteps(id) {
  return db("steps")
    .leftJoin("schemes", "schemes.id", "steps.scheme_id")
    .where("schemes.id", "=", id)
    .select(
      "steps.id",
      "steps.step_number",
      "steps.instructions",
      "schemes.scheme_name"
    );
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then((id) => {
      return findById(id);
    });
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => findById(id));
}

function remove(id) {
  return findById(id).then((scheme) => {
    const oldScheme = [...scheme];
    return db("schemes")
      .where({ id })
      .del()
      .then(() => {
        return oldScheme;
      });
  });
}
