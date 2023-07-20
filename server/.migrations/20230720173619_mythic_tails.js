exports.up = function (knex) {
    return (
      knex.schema
        // USERS TABLE
        .createTable("users", (table) => {
          table.increments("id");
          table.string("name").notNullable();
          table.string("email").notNullable();
          table.string("password").notNullable();
        })
        // CREATURES TABLE (renamed from "pets")
        .createTable("creatures", (table) => {
          table.increments("id");
          table.string("type").notNullable(); // e.g., dragon, fairy, etc.
          table.string("description");
          table.string("traits"); // comma-separated list of creature traits
        })
        // CREATURES THAT USERS OWN (Many-to-Many Relationship between Users and Creatures)
        .createTable("users_creatures", (table) => {
          table.increments("id");
          table
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");
          table
            .integer("creature_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("creatures")
            .onDelete("CASCADE");
          table.integer("health").defaultTo(100); // Add a health attribute to creatures owned by users
        })
        // INDIVIDUAL CREATURE DETAILS
        .createTable("creature_details", (table) => {
          table.increments("id");
          table.integer("creature_id").unsigned().notNullable();
          table.string("name");
          table.string("description");
          table.string("traits"); // comma-separated list of creature traits
          table
            .foreign("creature_id")
            .references("id")
            .inTable("creatures")
            .onDelete("CASCADE");
        })
    );
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable("creature_details")
      .dropTable("users_creatures")
      .dropTable("creatures")
      .dropTable("users");
  };