exports.seed = function (knex) {
  return knex("nyx_choices")
    .del()
    .then(() => knex("nyx_endings").del())
    .then(() => knex("nyx_scenarios").del())
    .then(() =>
      knex("nyx_scenarios").insert([
        {
          nyx_scenario_id: 1,
          nyx_name: "The Cursed Creature's Plea",
          nyx_additional_story:
            "While traversing the cursed forest, Nyx encounters a wretched and suffering creature. Its once magnificent form is now twisted by a curse, and its eyes plead for mercy.",
          nyx_story:
            "'P-please, release me from this agony,' the creature pleaded with a trembling voice, 'if you have the power, spare me from this wretched fate.'",
        },
        {
          nyx_scenario_id: 2,
          nyx_name: "The Whispering Trees",
          nyx_additional_story:
            "Intrigued by the creature's plight, Nyx decides to delve deeper into the nature of its curse. They feel compelled to understand the source of its suffering before making any decisions. Drawing upon their dark magic, Nyx attempts to unravel the curse that ensnares the creature, hoping to find a way to bring it relief.",
          nyx_story:
            "While resting under the gnarled trees of the cursed forest, Nyx hears faint whispers in the wind.The ancient trees seem to hold cryptic knowledge.",
        },
        {
          nyx_scenario_id: 3,
          nyx_name: "A Pact with Shadows",
          nyx_additional_story:
            "Nyx focuses their attention on the whispers, trying to discern their message. The voices of the trees speak of a forgotten prophecy and a connection between Nyx and the Tear of Radiance. The message is cryptic and difficult to interpret, but it ignites a glimmer of hope within Nyx.",
          nyx_story:
            "Nyx stumbles upon an ancient temple dedicated to the Shadow Gods.The temple offers Nyx the opportunity to forge a pact with shadows, granting them enhanced stealth and the ability to move undetected through the cursed lands.",
        },
        {
          nyx_scenario_id: 4,
          nyx_name: "Unseen Threads",
          nyx_additional_story:
            "Thinking the whispers are mere products of their imagination, Nyx decides to pay them no heed. They push forward, convinced that the only path to clarity lies in finding the Tear of Radiance.",
          nyx_story:
            "As Nyx draws closer to the abandoned village, they encounter a cloaked figure shrouded in mystery. The figure seems to know more about Nyx than they should.",
        },
        {
          nyx_scenario_id: 5,
          nyx_name: "The Enchanted Labyrinth",
          nyx_additional_story:
            "Sensing the potential dangers of making a pact with the Shadow Gods, Nyx decides to resist the temptation and continue their journey without relying on unknown powers. This choice preserves their connection to their own essence but leaves them wondering about the path they might have forsaken.",
          nyx_story:
            "Nyx discovers an enchanted labyrinth, rumored to be the resting place of ancient artifacts of great power. Within the labyrinth, they encounter various trials and puzzles designed to test their worthiness.",
        },
        {
          nyx_scenario_id: 6,
          nyx_name: "Shadows of the Past",
          nyx_additional_story:
            "With a surge of determination, Nyx confronts the cloaked figure, demanding to know why they are being watched and what connection they have to the Tear of Radiance. The figure's response sends shivers down Nyx's spine, revealing a tangled web of fate and destiny.",
          nyx_story:
            "The cloaked figure shares an unsettling revelation with Nyx, claiming to know the truth about their forgotten past and the significance of the Tear of Radiance.",
        },
        {
          nyx_scenario_id: 7,
          nyx_name: "Clash of Paths",
          nyx_additional_story:
            "Suspecting that the cloaked figure might have ulterior motives, Nyx decides to remain cautious. They keep a watchful eye on the figure's actions and are prepared for any potential betrayal.",
          nyx_story:
            "As Nyx ventures deeper into the cursed lands, they come across Alara, a skilled guardian with her own motivations. Both Nyx and Alara are searching for the Tear of Radiance, and their paths are about to collide.",
        },
        {
          nyx_scenario_id: 8,
          nyx_name: "The Artifact's Guardian",
          nyx_additional_story:
            "Determined to prove their worth and find the artifacts within the labyrinth, Nyx decides to press on. Each trial they conquer reveals more about their true potential and the nature of the Cursebearer.",
          nyx_story:
            "Nyx faces the guardian of the ancient artifacts within the labyrinth. The guardian is a formidable creature, and Nyx must overcome it to proceed.",
        },
        {
          nyx_scenario_id: 9,
          nyx_name: "The Echoing Doubt",
          nyx_additional_story:
            "Overwhelmed by the trials and doubting their abilities, Nyx contemplates retreating from the labyrinth. However, a glimmer of hope remains, reminding them of the power that awaits should they succeed.",
          nyx_story:
            "Doubt gnaws at Nyx as they navigate through the labyrinth. The weight of their destiny feels overwhelming, and they question if they are truly meant to be the Cursebearer.",
        },
        {
          nyx_scenario_id: 10,
          nyx_name: "Confrontation",
          nyx_additional_story:
            "Preferring to remain independent, Nyx decides not to reveal themselves to Alara just yet. They continue their journey alone, wary of potential complications that may arise from forming a partnership.",
          nyx_story:
            "While traversing the cursed lands, Nyx finally encounters Aveline, the sorceress responsible for the cursed realm.",
        },
      ]),
    )
    .then(() =>
      knex("nyx_endings").insert([
        {
          nyx_ending_id: 1,
          nyx_name: "Embrace the Darkness",
          nyx_story:
            "Nyx's decision to swiftly end the creature's suffering with their dark magic marks the beginning of a darker path. As Nyx embraces their newfound powers, they become increasingly disconnected from their humanity. The malevolent energy consumes them, and the Cursebearer's quest for the Tear of Radiance takes on a more sinister purpose. Nyx's heart becomes clouded by darkness, and they lose sight of their original quest, becoming a formidable force of chaos and destruction in Ethoria.",
        },
        {
          nyx_ending_id: 2,
          nyx_name: "Bound by Shadows",
          nyx_story:
            "By trusting the cloaked figure, Nyx uncovers long-lost memories and revelations about their past as the Lost Cursebearer. Armed with newfound knowledge, they confront Aveline with determination, seeking to break the curse and reclaim their true identity. The encounter with Aveline proves to be a pivotal moment in Nyx's journey, setting them on a path of self-discovery and the ultimate confrontation with the sorceress.",
        },
        {
          nyx_ending_id: 3,
          nyx_name: "The Truth Unveiled",
          nyx_story:
            "By trusting the cloaked figure, Nyx uncovers long-lost memories and revelations about their past as the Lost Cursebearer. Armed with newfound knowledge, they confront Aveline with determination, seeking to break the curse and reclaim their true identity. The encounter with Aveline proves to be a pivotal moment in Nyx's journey, setting them on a path of self-discovery and the ultimate confrontation with the sorceress.",
        },
        {
          nyx_ending_id: 4,
          nyx_name: "The Alliance of Light",
          nyx_story:
            "By forming an alliance with Alara, Nyx discovers the strength of unity and shared purpose. The Cursebearer and the guardian make a formidable team, each complementing the other's abilities. Together, they navigate the treacherous challenges ahead, and their shared journey leads to a profound bond that will shape the fate of Ethoria.",
        },
        {
          nyx_ending_id: 5,
          nyx_name: "Wisdom Over Power",
          nyx_story:
            "Choosing to outwit the guardian rather than engage it directly, Nyx demonstrates cunning and strategic thinking. The Cursebearer learns that there are many ways to confront challenges, and that raw power isn't always the answer. Their quest for the Tear of Radiance evolves into a quest for wisdom and understanding, setting them on a path of enlightenment..",
        },
        {
          nyx_ending_id: 6,
          nyx_name: "Lost in Doubt",
          nyx_story:
            "Overwhelmed by doubt, Nyx contemplates abandoning the quest to claim the Tear of Radiance. The weight of the Cursebearer's destiny becomes too burdensome, and they lose hope in their ability to break the curse. Their journey in Ethoria comes to a halt, leaving the land to languish in darkness under Aveline's malevolence.",
        },
        {
          nyx_ending_id: 7,
          nyx_name: "The Confrontation",
          nyx_story:
            "By directly confronting Aveline, Nyx seeks answers to their forgotten past and the purpose of the Cursebearer. However, Aveline's cryptic answers leave Nyx with more questions than before. This encounter sparks a newfound determination in Nyx to discover the truth and reclaim their destiny, setting the stage for a climactic showdown between the Cursebearer and the sorceress.",
        },
        {
          nyx_ending_id: 8,
          nyx_name: "Shadows in the Dark",
          nyx_story:
            "Choosing to observe Aveline from the shadows grants Nyx insight into their enemy's plans. The knowledge gained helps Nyx prepare for the inevitable confrontation, but it also deepens the mystery surrounding their connection to Aveline and the Tear of Radiance. Nyx becomes a ghostly presence in Ethoria, manipulating events from the shadows as they wait for the opportune moment to reveal their true power.",
        },
      ]),
    )
    .then(() =>
      knex("nyx_choices").insert([
        // Scenario 1: The Cursed Creature's Plea
        {
          nyx_choice_id: 1,
          nyx_description:
            "Use your dark magic to end the creature's suffering swiftly, showing no mercy.",
          nyx_next_scenario_id: null,
          nyx_linked_ending_id: 1,
          nyx_linked_scenario_id: 1,
        },
        {
          nyx_choice_id: 2,
          nyx_description:
            "Choose to investigate the cause of the creature's suffering before deciding its fate.",
          nyx_next_scenario_id: 2,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 1,
        },
        //Scenario 2: The Whispering Trees
        {
          nyx_choice_id: 3,
          nyx_description:
            "Listen carefully to the whispers and try to decipher their meaning.",
          nyx_next_scenario_id: 3,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 2,
        },
        {
          nyx_choice_id: 4,
          nyx_description:
            "Disregard the whispers as mere hallucinations and continue your journey.",
          nyx_next_scenario_id: 4,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 2,
        },
        //Scenario 3: A Pact with Shadows
        {
          nyx_choice_id: 5,
          nyx_description:
            "Embrace the pact with shadows, accepting its dark gifts.",
          nyx_next_scenario_id: null,
          nyx_linked_ending_id: 2,
          nyx_linked_scenario_id: 3,
        },
        {
          nyx_choice_id: 6,
          nyx_description: "Reject the pact, wary of its unknown consequences.",
          nyx_next_scenario_id: 5,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 3,
        },
        //Scenario 4: Unseen Threads
        {
          nyx_choice_id: 7,
          nyx_description: "Confront the cloaked figure and demand answers.",
          nyx_next_scenario_id: 6,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 4,
        },
        {
          nyx_choice_id: 8,
          nyx_description:
            "Avoid the cloaked figure and maintain a distance, remaining cautious.",
          nyx_next_scenario_id: 7,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 4,
        },
        //Scenario 5: The Enchanted Labyrinth*
        {
          nyx_choice_id: 9,
          nyx_description:
            "Embrace the challenges of the labyrinth and continue forward.",
          nyx_next_scenario_id: 8,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 5,
        },
        {
          nyx_choice_id: 10,
          nyx_description:
            "Doubt your abilities and consider turning back from the labyrinth.",
          nyx_next_scenario_id: 9,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 5,
        },
        //Scenario 6: Shadows of the Past
        {
          nyx_choice_id: 11,
          nyx_description:
            "Confront and conquer your doubts, reaffirming your purpose.",
          nyx_next_scenario_id: null,
          nyx_linked_ending_id: 3,
          nyx_linked_scenario_id: 6,
        },
        {
          nyx_choice_id: 12,
          nyx_description:
            "Succumb to doubt and consider abandoning the quest.",
          nyx_next_scenario_id: 7,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 6,
        },
        //Scenario 7: Clash of Paths
        {
          nyx_choice_id: 13,
          nyx_description:
            "Approach Alara and form an alliance to search for the Tear of Radiance together.",
          nyx_next_scenario_id: null,
          nyx_linked_ending_id: 4,
          nyx_linked_scenario_id: 7,
        },
        {
          nyx_choice_id: 14,
          nyx_description:
            "Keep your distance from Alara and continue the search alone.",
          nyx_next_scenario_id: 10,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 7,
        },
        //Scenario 8: The Artifact's Guardian
        {
          nyx_choice_id: 15,
          nyx_description: "Engage the guardian in direct combat.",
          nyx_next_scenario_id: 10,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 8,
        },
        {
          nyx_choice_id: 16,
          nyx_description: "Outwit the guardian through cunning and strategy.",
          nyx_next_scenario_id: null,
          nyx_linked_ending_id: 5,
          nyx_linked_scenario_id: 8,
        },
        // Scenario 9: The Echoing Doubt
        {
          nyx_choice_id: 17,
          nyx_description: "Trust the cloaked figure and seek their guidance.",
          nyx_next_scenario_id: 3,
          nyx_linked_ending_id: null,
          nyx_linked_scenario_id: 9,
        },
        {
          nyx_choice_id: 18,
          nyx_description:
            "Doubt the cloaked figure's words and consider them a potential enemy.",
          nyx_next_scenario_id: null,
          nyx_linked_ending_id: 6,
          nyx_linked_scenario_id: 9,
        },
        //Scenario 10: Confrontation
        {
          nyx_choice_id: 19,
          nyx_description:
            "Confront Aveline directly, seeking answers and confrontation.",
          nyx_next_scenario_id: null,
          nyx_linked_ending_id: 7,
          nyx_linked_scenario_id: 10,
        },
        {
          nyx_choice_id: 20,
          nyx_description:
            "Avoid a direct confrontation and observe Aveline from the shadows.",
          nyx_next_scenario_id: null,
          nyx_linked_ending_id: 8,
          nyx_linked_scenario_id: 10,
        },
      ]),
    );
};
