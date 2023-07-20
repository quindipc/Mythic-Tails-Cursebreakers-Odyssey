exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "Chelsea",
      email: "chelsea@email.com",
      password: "123456",
    },
    {
      id: 2,
      name: "Cassie",
      email: "cassie@email.com",
      password: "654321",
    },
    {
      id: 3,
      name: "Chelscass",
      email: "chelscass@email.com",
      password: "abc123",
    }
  ]);
};
