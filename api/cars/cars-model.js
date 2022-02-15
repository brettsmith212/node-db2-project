const db = require("../../data/db-config");

const getAll = () => {
  return db("cars");
};

const getById = async (id) => {
  return await db("cars").where({ id });
};

const create = async (account) => {
  let [id] = await db("accounts").insert(account);
  return {
    id,
    account,
  };
};

module.exports = {
  getAll,
  getById,
  create,
};
