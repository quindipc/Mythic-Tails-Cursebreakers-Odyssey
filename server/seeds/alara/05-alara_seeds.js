exports.seed = function (knex) {
  return knex("alara_scenarios")
    .del()
    .then(() => knex("alara_choices").del())
    .then(() => knex("alara_endings").del())
    .then(function () {
      return knex("alara_scenarios").insert([
        {
          scenario_id: 1,
          name: "The Healing Flower's Quest",
          additional_story:"'Guardian,' Elowen whispers in a faint voice, 'the heart of the forest withers, and my brethren suffer. Only a special healing flower, the Radiant Bloom, hidden within the dangerous ruins of the forgotten temple, can mend our home. Please, save us'",
          story: "Alara learns of the Radiant Bloom, the only flower with the power to break the curse and restore the heart of the forest. The flower is said to be hidden deep within the treacherous ruins of the forgotten temple.",
        },
        {
          scenario_id: 2,
          name: "Trials of the Forgotten Temple",
          additional_story:"Filled with determination, Alara decides to embark on a perilous journey to find the Radiant Bloom. Along the way, she faces various challenges and encounters both allies and foes. The temple's ancient traps and guardians test her resolve, and she must call upon her skills as a guardian to overcome these obstacles.",
          story: "Alara enters the forgotten temple, where she encounters various trials and puzzles designed to test the worthiness of those who seek the Radiant Bloom.",
        },
        {
          scenario_id: 3,
          name: "The Guidance of Creatures",
          additional_story:"Feeling cautious about venturing into the dangerous temple, Alara decides to seek alternative solutions or gather more information before proceeding. She consults with the Spirit of Balance and other creatures in the forest to gain insights into the temple's dangers and potential clues to the Radiant Bloom's whereabouts.",
          story: "Alara seeks guidance from the creatures of the forest, hoping they hold clues about the Radiant Bloom's location.",
        },
        {
          scenario_id: 4,
          name: "The Guardian's Trial",
          additional_story:"Drawn to the temple's mysteries, Alara embraces the challenges and presses forward. Each trial she conquers reveals more about her own strength and the connection she shares with the Spirit of Balance.",
          story: "In the heart of the temple, Alara faces the ultimate guardian, an ancient and powerful entity protecting the Radiant Bloom.",
        },
        {
          scenario_id: 5,
          name: "The Temptation of Darkness",
          additional_story:"Overwhelmed by the trials and doubting her abilities, Alara contemplates retreating from the temple. However, a glimmer of hope remains, reminding her of the power that awaits should she succeed.",
          story: "As Alara ventures deeper into the temple, she encounters dark energies that attempt to sway her from her path.",
        },
        {
          scenario_id: 6,
          name: "Creatures' Insights",
          additional_story:"Recognizing the importance of cooperation, Alara forms an alliance with the creatures of the forest. They provide her with valuable insights and accompany her on her journey, strengthening her connection to the natural world.",
          story: "Alara's alliance with the forest creatures proves valuable as they provide her with insights into the temple's trials and the guardian's weaknesses.",
        },
        {
          scenario_id: 7,
          name: "The Temple's Mysteries",
          additional_story:"Preferring to rely on her own skills and instincts, Alara decides to face the challenges alone. She trusts her training as a guardian and remains determined to find the Radiant Bloom on her own.",
          story: "Alara's journey through the temple leads her to discover ancient texts and relics that hold secrets about the Radiant Bloom and the curse.",
        },
        {
          scenario_id: 8,
          name: "The Burden of Choice",
          additional_story:"With unwavering resolve, Alara resists the temptation of darkness and remains steadfast in her mission to find the Radiant Bloom. The Spirit of Balance's guidance strengthens her resolve as she pushes forward.",
          story: "Alara faces a pivotal moment where her choices determine the outcome of her quest and the fate of Ethoria.",
        },
        {
          scenario_id: 9,
          name: "Ethical Dilemmas",
          additional_story:"While the alliance with the creatures has been beneficial, Alara encounters a challenge that tests the trust between them. She must navigate the complexities of her relationships while continuing her quest for the Radiant Bloom.",
          story: "Alara encounters situations that present ethical dilemmas, testing her commitment to balance and compassion.",
        },
        {
          scenario_id: 10,
          name: "Confrontation",
          additional_story:"Intrigued by the temple's mysteries, Alara decides to delve deeper, uncovering secrets that shed light on the curse's origin and the potential consequences of breaking it.",
          story: "After navigating through the temple and discovering the Radiant Bloom's location, Alara faces a confrontation with Aveline, the sorceress responsible for the cursed realm.",
        },
      ]);
    })
    .then(function () {
      return knex("alara_choices").insert([
      // Scenario 1: The Healing Flower's Quest
        {
          choice_id: 1,
          description: "Embark on a perilous journey to find the Radiant Bloom.",
          linked_scenario_id: 2,
          linked_ending_id: null,
        },
        {
          choice_id: 2,
          description: "Seek an alternative solution or gather more information before proceeding.",
          linked_scenario_id: 3,
          linked_ending_id: null,
        },
        // Scenario 2: Trials of the Forgotten Temple
        {
          choice_id: 3,
          description: "Embrace the challenges of the temple and press forward.",
          linked_scenario_id: 4,
          linked_ending_id: null,
        },
        {
          choice_id: 4,
          description: "Doubt her abilities and consider turning back from the temple.",
          linked_scenario_id: 5,
          linked_ending_id: null,
        },
        // Scenario 3:The Guidance of Creatures
        {
          choice_id: 5,
          description: "Form an alliance with the creatures and seek their aid.",
          linked_scenario_id: 6,
          linked_ending_id: null,
        },
        {
          choice_id: 6,
          description: "Choose to rely on her own skills and instincts.",
          linked_scenario_id: 7,
          linked_ending_id: null,
        },
        //Scenario 4: The Guardian's Trial
        {
          choice_id: 7,
          description: "Engage the guardian in direct combat.",
          linked_scenario_id: null,
          linked_ending_id: 1,
        },
        {
          choice_id: 8,
          description: "Outsmart the guardian through cunning and strategy",
          linked_scenario_id: null,
          linked_ending_id: 2,
        },
        //Scenario 5: The Temptation of Darkness
        {
          choice_id: 9,
          description: "Resist the temptation and remain steadfast in her mission.",
          linked_scenario_id: 8,
          linked_ending_id: null,
        },
        {
          choice_id: 10,
          description: "Succumb to the temptation and face the consequences.",
          linked_scenario_id: null,
          linked_ending_id: 3,
        },
        //Scenario 6: Creatures' Insights
        {
          choice_id: 11,
          description: "Utilize the creatures' insights to overcome the temple's challenges.",
          linked_scenario_id: 4,
          linked_ending_id: null,
        },
        {
          choice_id: 12,
          description: "Encounter a challenge that tests the alliance's trust.",
          linked_scenario_id: 9,
          linked_ending_id: null,
        },
        //Scenario 7: The Temple's Mysteries
        {
          choice_id: 13,
          description: "Delve deeper into the temple's mysteries and learn its secrets.",
          linked_scenario_id: 10,
          linked_ending_id: null,
        },
        {
          choice_id: 14,
          description: "Choose not to dwell on the past and focus on the task at hand.",
          linked_scenario_id: null,
          linked_ending_id: 10,
        },
        //Scenario 8: The Burden of Choice
        {
          choice_id: 15,
          description: "Embrace the weight of her responsibilities and decide to break the curse.",
          linked_scenario_id: null,
          linked_ending_id: 4,
        },
        {
          choice_id: 16,
          description: " Contemplate the consequences of her actions and seek another solution.",
          linked_scenario_id: null,
          linked_ending_id: 5,
        },
        //Scenario 9: The Temptation of Darkness
        {
          choice_id: 17,
          description: "Prioritize compassion and find a peaceful resolution.",
          linked_scenario_id: null,
          linked_ending_id: 6,
        },
        {
          choice_id: 18,
          description: "Choose the path of pragmatism and make difficult sacrifices.",
          linked_scenario_id: null,
          linked_ending_id: 7,
        },
        //Scenario 10: Confrontation
        {
          choice_id: 19,
          description: "Confront Aveline directly, seeking answers and confrontation",
          linked_scenario_id: null,
          linked_ending_id: 8,
        },
        {
          choice_id: 20,
          description: "Avoid direct confrontation and observe Aveline from the shadows.",
          linked_scenario_id: null,
          linked_ending_id: 9,
        },
      ]);
    })
    .then(function () {
      return knex("alara_endings").insert([
        {
          ending_id: 1,
          name: "The Guardian's Triumph",
          story: "In a fierce battle, Alara faces the ultimate guardian of the forgotten temple and emerges victorious. She claims the Radiant Bloom, the flower with the power to break the curse and heal the heart of the forest. With the Spirit of Balance's guidance, she confronts Aveline, the sorceress behind the curse. In a climactic showdown, Alara uses the Radiant Bloom's magic to break the curse, restoring Ethoria to its former glory. The land begins to heal, and the creatures rejoice as harmony returns to their home.",
        },
        {
          ending_id: 2,
          name: "The Illuminated Path",
          story: "Through cunning and strategy, Alara outsmarts the guardian of the forgotten temple. Her resourcefulness and the guidance of the Spirit of Balance lead her to uncover the true purpose of the Radiant Bloom. With newfound knowledge, she faces Aveline, the sorceress behind the curse, armed with the understanding of how to break it. Choosing a path of enlightenment and compassion, Alara successfully breaks the curse, bringing light back to Ethoria's once-darkened lands.",
        },
        {
          ending_id: 3,
          name: "Temptation's Toll",
          story: "Overwhelmed by the allure of dark power, Alara succumbs to the temptation within the forgotten temple. In doing so, she loses her connection with the Spirit of Balance and becomes susceptible to darker influences. As she confronts Aveline, the sorceress manipulates her weakened state, using her to further her own malevolent plans. The land of Ethoria faces an uncertain and perilous future.",
        },
        {
          ending_id: 4,
          name: "The Guardian's Resolve",
          story: "Alara embraces the weight of her responsibilities and decides to break the curse. With the Spirit of Balance by her side, she confronts Aveline, displaying unwavering determination and resolve. Their clash is fierce, but Alara's commitment to balance and her connection with the Radiant Bloom prove to be formidable forces. In a triumphant moment, Alara shatters the curse, returning peace and prosperity to Ethoria.",
        },
        {
          ending_id: 5,
          name: "Ethical Balance",
          story: "Contemplating the consequences of her actions, Alara seeks a path that preserves the balance of nature and the well-being of Ethoria's inhabitants. She carefully weighs her decisions, making difficult sacrifices when necessary. In the end, Alara manages to find a solution that breaks the curse while minimizing harm to the land. Her choices earn her the respect of the creatures she protected, and Ethoria begins its journey to recovery.",
        },
        {
          ending_id: 6,
          name: "Compassionate Harmony",
          story: "Believing in the power of compassion, Alara seeks peaceful resolutions to the ethical dilemmas she faces. Her empathy and understanding lead her to unexpected alliances and opportunities for healing. Through her compassion, she breaks the curse and fosters a new era of harmony and cooperation among the creatures of Ethoria. The land flourishes once more, united by a shared desire for peace and prosperity.",
        },
        {
          ending_id: 7,
          name: "Pragmatic Sacrifice",
          story: "In the face of difficult decisions, Alara adopts a pragmatic approach, making sacrifices for the greater good. These choices are challenging, but they demonstrate her commitment to restoring balance to Ethoria. Her willingness to make tough decisions leads to the breaking of the curse and a brighter future for the realm. Though not without hardship, her pragmatic choices bring about meaningful change.",
        },
        {
          ending_id: 8,
          name: "Confrontation and Revelation",
          story: "By confronting Aveline directly, Alara seeks answers to her questions and challenges the sorceress responsible for the suffering in Ethoria. The confrontation reveals hidden truths about Aveline's motives and the curse's origins. As their battle intensifies, Alara's connection to the Spirit of Balance guides her actions. In a surprising twist, the encounter leads to the revelation that Nyx and Alara share a mysterious connection, setting the stage for an unexpected alliance.",
        },
        {
          ending_id: 9,
          name: "Shadows of Intrigue",
          story: "Opting for a more cautious approach, Alara observes Aveline from the shadows, learning more about her enemy and waiting for the right moment to strike. In doing so, Alara uncovers Aveline's dark plans and her connection to the cursed realm. As Alara plots her next move, she encounters Nyx, the Lost Cursebearer, who is on a quest of their own. Unbeknownst to both, their paths are destined to cross, and their meeting will change the fate of Ethoria forever.",
        },
        {
          ending_id: 10,
          name: "Unfulfilled Curiosity",
          story: "Choosing not to dwell on the past, Alara focuses on the task at hand—finding the Radiant Bloom. She believes that understanding the curse can come later, once the land is healed. However, her curiosity remains unfulfilled, and the mysteries of the curse linger in the back of her mind. As she breaks the curse and restores Ethoria's balance, Alara's desire for answers grows stronger, setting the stage for future adventures and revelations.",
        },
      ]);
    })
    .then(function () {
      // Inserts seed entries for linking choices to scenarios
      return knex("choices_scenarios").insert([
        // Scenario 1 choices
        { scenario_id: 1, choice_id: 1 },
        { scenario_id: 1, choice_id: 2 },
        // Scenario 2 choices
        { scenario_id: 2, choice_id: 3 },
        { scenario_id: 2, choice_id: 4 },
        // Scenario 3 choices
        { scenario_id: 3, choice_id: 5 },
        { scenario_id: 3, choice_id: 6 },
        // Scenario 4 choices
        { scenario_id: 4, choice_id: 7 },
        { scenario_id: 4, choice_id: 8 },
        // Scenario 5 choices
        { scenario_id: 5, choice_id: 9 },
        { scenario_id: 5, choice_id: 10 },
        // Scenario 6 choices
        { scenario_id: 6, choice_id: 11 },
        { scenario_id: 6, choice_id: 12 },
        // Scenario 7 choices
        { scenario_id: 7, choice_id: 13 },
        { scenario_id: 7, choice_id: 14 },
        // Scenario 8 choices
        { scenario_id: 8, choice_id: 15 },
        { scenario_id: 8, choice_id: 15 },
        // Scenario 9 choices
        { scenario_id: 9, choice_id: 17 },
        { scenario_id: 9, choice_id: 18 },
        // Scenario 10 choices
        { scenario_id: 10, choice_id: 19 },
        { scenario_id: 10, choice_id: 20 },
      ]);
    })
    .then(function () {
      // Inserts seed entries for linking choices to endings
      return knex("choices_endings").insert([
        // Scenario 1 choices linked to endings
        { choice_id: 1, ending_id: null },
        { choice_id: 2, ending_id: null },
        // Scenario 2 choices linked to endings
        { choice_id: 3, ending_id: null },
        { choice_id: 4, ending_id: null },
        // Scenario 3 choices linked to endings
        { choice_id: 5, ending_id: null },
        { choice_id: 6, ending_id: null },
        // Scenario 4 choices linked to endings
        { choice_id: 7, ending_id: 1 },
        { choice_id: 8, ending_id: 2 },
        // Scenario 5 choices linked to endings
        { choice_id: 9, ending_id: null },
        { choice_id: 10, ending_id: 3 },
        // Scenario 6 choices linked to endings
        { choice_id: 11, ending_id: null },
        { choice_id: 12, ending_id: null },
        // Scenario 7 choices linked to endings
        { choice_id: 13, ending_id: null },
        { choice_id: 14, ending_id: null },
        // Scenario 8 choices linked to endings
        { choice_id: 15, ending_id: 4 },
        { choice_id: 16, ending_id: 5 },
        // Scenario 9 choices linked to endings
        { choice_id: 17, ending_id: 6 },
        { choice_id: 18, ending_id: 7 },
        // Scenario 10 choices linked to endings
        { choice_id: 19, ending_id: 8 },
        { choice_id: 20, ending_id: 9 },
      ]);
    });
};
