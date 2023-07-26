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
          // Scenarios for Nyx
    .createTable("nyx_scenarios", (table) => {
      table.increments("nyx_scenario_id"); // Primary key for the scenario
      table.string("nyx_name").notNullable();
      table.text("nyx_additional_story").notNullable();
      table.text("nyx_story").notNullable();
    })
    // Choices
    .createTable("nyx_choices", (table) => {
      table.increments("nyx_choice_id"); // Primary key for the choice
      table.string("nyx_description").notNullable();
      table.integer("nyx_linked_scenario_id").unsigned(); // Foreign key to nyx_scenarios table
      table.integer("nyx_linked_ending_id").unsigned(); // Foreign key to nyx_endings table
    })
    // Endings
    .createTable("nyx_endings", (table) => {
      table.increments("nyx_ending_id"); // Primary key for the ending
      table.string("nyx_name").notNullable();
      table.text("nyx_story").notNullable();
    })
    // Add foreign key constraints
    .alterTable("nyx_choices", (table) => {
      table
        .foreign("nyx_linked_scenario_id")
        .references("nyx_scenario_id")
        .inTable("nyx_scenarios");
      table
        .foreign("nyx_linked_ending_id")
        .references("nyx_ending_id")
        .inTable("nyx_endings");
    })
       // Scenarios for Alara
    .createTable("alara_scenarios", (table) => {
      table.increments("alara_scenario_id"); // Primary key for the scenario
      table.string("alara_name").notNullable();
      table.text("alara_additional_story").notNullable();
      table.text("alara_story").notNullable();
    })
    // Choices
    .createTable("alara_choices", (table) => {
      table.increments("alara_choice_id"); // Primary key for the choice
      table.string("alara_description").notNullable();
      table.integer("alara_linked_scenario_id").unsigned(); // Foreign key to alara_scenarios table
      table.integer("alara_linked_ending_id").unsigned(); // Foreign key to alara_endings table
    })
    // Endings
    .createTable("alara_endings", (table) => {
      table.increments("alara_ending_id"); // Primary key for the ending
      table.string("alara_name").notNullable();
      table.text("story").notNullable();
    })
    // Add foreign key constraints
    .alterTable("alara_choices", (table) => {
      table
        .foreign("alara_linked_scenario_id")
        .references("alara_scenario_id")
        .inTable("alara_scenarios");
      table
        .foreign("alara_linked_ending_id")
        .references("alara_ending_id")
        .inTable("alara_endings");
    })
      
    );
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable("creature_details")
      .dropTable("users_creatures")
      .dropTable("creatures")
      .dropTable("users")
      .dropTable("nyx_choices")
      .dropTable("nyx_endings")
      .dropTable("nyx_scenarios")
      .dropTable("alara_choices")
      .dropTable("alara_endings")
      .dropTable("alara_scenarios");
  };