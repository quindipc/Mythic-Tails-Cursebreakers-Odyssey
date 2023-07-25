exports.up = function (knex) {
    return (
      knex.schema
        // USERS TABLE
        .createTable("users", (table) => {
          table.increments("id"); //Primary key for the user
          table.string("name").notNullable();
          table.string("email").notNullable();
          table.string("hashedPassword").notNullable();
        })
        // CREATURES TABLE (renamed from "pets")
        .createTable("creatures", (table) => {
          table.increments("id");  //Primary key for the creature
          table.string("type").notNullable(); 
          table.string("description");
          table.string("traits", 5000).notNullable(); // comma-separated list of creature traits
        })
        // CREATURES THAT USERS OWN (Many-to-Many Relationship between Users and Creatures)
        .createTable("users_creatures", (table) => {
          table.increments("id"); //Primary key for the relation table
          table
            .integer("user_id") //Foreign key that references the id column of the users table
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");
          table
            .integer("creature_id") //Foreign key that references the id column of the creatures table
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("creatures")
            .onDelete("CASCADE");
          table.integer("health").defaultTo(100); // Add a health attribute to creatures owned by users
          table.text("description");
          table.string("traits", 5000);
          table.string("type").notNullable(); 
        })
        // INDIVIDUAL CREATURE DETAILS
        .createTable("creature_details", (table) => {
          table.increments("id");
          table.integer("creature_id").unsigned().notNullable();
          table.string("name");
          table.string("type");
          table.string("description");
          table.string("traits", 5000).notNullable(); // comma-separated list of creature traits
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