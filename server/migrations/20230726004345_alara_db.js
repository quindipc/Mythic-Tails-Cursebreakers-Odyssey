exports.up = function(knex) {
    return knex.schema
      // Scenarios
      .createTable("alara_scenarios", (table) => {
        table.increments("scenario_id"); // Primary key for the scenario
        table.string("name").notNullable();
        table.text("story").notNullable();
      })
      // Choices
      .createTable("alara_choices", (table) => {
        table.increments("choice_id"); // Primary key for the choice
        table.string("description").notNullable();
        table.integer("linked_scenario_id").unsigned(); // Foreign key to scenarios table
        table.integer("linked_ending_id").unsigned(); // Foreign key to endings table
      })
      // Endings
      .createTable("alara_endings", (table) => {
        table.increments("ending_id"); // Primary key for the ending
        table.string("name").notNullable();
        table.text("story").notNullable();
      })
      // Add foreign key constraints
      .alterTable("alara_choices", (table) => {
        table
          .foreign("linked_scenario_id")
          .references("scenario_id")
          .inTable("scenarios");
        table
          .foreign("linked_ending_id")
          .references("ending_id")
          .inTable("endings");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("alara_choices")
      .dropTableIfExists("alara_endings")
      .dropTableIfExists("alara_scenarios");
  };
  