exports.seed = function (knex) {
  return knex("alara_choices")
    .del()
    .then(() => knex("alara_endings").del())
    .then(() => knex("alara_scenarios").del())
    .then(function () {
      return knex("alara_scenarios").insert([
        {
          alara_scenario_id: 1,
          alara_name: "The Healing Flower's Quest",
          alara_additional_story:
            "'Guardian,' Elowen whispers in a faint voice, 'the heart of the forest withers, and my brethren suffer. Only a special healing flower, the Radiant Bloom, hidden within the dangerous ruins of the forgotten temple, can mend our home. Please, save us'",
          alara_story:
            "Alara learns of the Radiant Bloom, the only flower with the power to break the curse and restore the heart of the forest. The flower is said to be hidden deep within the treacherous ruins of the forgotten temple.",
        },
        {
          alara_scenario_id: 2,
          alara_name: "Trials of the Forgotten Temple",
          alara_additional_story:
            "Filled with determination, Alara decides to embark on a perilous journey to find the Radiant Bloom. Along the way, she faces various challenges and encounters both allies and foes. The temple's ancient traps and guardians test her resolve, and she must call upon her skills as a guardian to overcome these obstacles.",
          alara_story:
            "Alara enters the forgotten temple, where she encounters various trials and puzzles designed to test the worthiness of those who seek the Radiant Bloom.",
        },
        {
          alara_scenario_id: 3,
          alara_name: "The Guidance of Creatures",
          alara_additional_story:
            "Feeling cautious about venturing into the dangerous temple, Alara decides to seek alternative solutions or gather more information before proceeding. She consults with the Spirit of Balance and other creatures in the forest to gain insights into the temple's dangers and potential clues to the Radiant Bloom's whereabouts.",
          alara_story:
            "Alara seeks guidance from the creatures of the forest, hoping they hold clues about the Radiant Bloom's location.",
        },
        {
          alara_scenario_id: 4,
          alara_name: "The Guardian's Trial",
          alara_additional_story:
            "Drawn to the temple's mysteries, Alara embraces the challenges and presses forward. Each trial she conquers reveals more about her own strength and the connection she shares with the Spirit of Balance.",
          alara_story:
            "In the heart of the temple, Alara faces the ultimate guardian, an ancient and powerful entity protecting the Radiant Bloom.",
        },
        {
          alara_scenario_id: 5,
          alara_name: "The Temptation of Darkness",
          alara_additional_story:
            "Overwhelmed by the trials and doubting her abilities, Alara contemplates retreating from the temple. However, a glimmer of hope remains, reminding her of the power that awaits should she succeed.",
          alara_story:
            "As Alara ventures deeper into the temple, she encounters dark energies that attempt to sway her from her path.",
        },
        {
          alara_scenario_id: 6,
          alara_name: "Creatures' Insights",
          alara_additional_story:
            "Recognizing the importance of cooperation, Alara forms an alliance with the creatures of the forest. They provide her with valuable insights and accompany her on her journey, strengthening her connection to the natural world.",
          alara_story:
            "Alara's alliance with the forest creatures proves valuable as they provide her with insights into the temple's trials and the guardian's weaknesses.",
        },
        {
          alara_scenario_id: 7,
          alara_name: "The Temple's Mysteries",
          alara_additional_story:
            "Preferring to rely on her own skills and instincts, Alara decides to face the challenges alone. She trusts her training as a guardian and remains determined to find the Radiant Bloom on her own.",
          alara_story:
            "Alara's journey through the temple leads her to discover ancient texts and relics that hold secrets about the Radiant Bloom and the curse.",
        },
        {
          alara_scenario_id: 8,
          alara_name: "The Burden of Choice",
          alara_additional_story:
            "With unwavering resolve, Alara resists the temptation of darkness and remains steadfast in her mission to find the Radiant Bloom. The Spirit of Balance's guidance strengthens her resolve as she pushes forward.",
          alara_story:
            "Alara faces a pivotal moment where her choices determine the outcome of her quest and the fate of Ethoria.",
        },
        {
          alara_scenario_id: 9,
          alara_name: "Ethical Dilemmas",
          alara_additional_story:
            "While the alliance with the creatures has been beneficial, Alara encounters a challenge that tests the trust between them. She must navigate the complexities of her relationships while continuing her quest for the Radiant Bloom.",
          alara_story:
            "Alara encounters situations that present ethical dilemmas, testing her commitment to balance and compassion.",
        },
        {
          alara_scenario_id: 10,
          alara_name: "Confrontation",
          alara_additional_story:
            "Intrigued by the temple's mysteries, Alara decides to delve deeper, uncovering secrets that shed light on the curse's origin and the potential consequences of breaking it.",
          alara_story:
            "After navigating through the temple and discovering the Radiant Bloom's location, Alara faces a confrontation with Aveline, the sorceress responsible for the cursed realm.",
        },
      ])
    })
    .then(function () {
      return knex("alara_endings").insert([
        {
          alara_ending_id: 1,
          alara_name: "The Guardian's Triumph",
          alara_story:
            "In a fierce battle, Alara faces the ultimate guardian of the forgotten temple and emerges victorious. She claims the Radiant Bloom, the flower with the power to break the curse and heal the heart of the forest. With the Spirit of Balance's guidance, she confronts Aveline, the sorceress behind the curse. In a climactic showdown, Alara uses the Radiant Bloom's magic to break the curse, restoring Ethoria to its former glory. The land begins to heal, and the creatures rejoice as harmony returns to their home.",
        },
        {
          alara_ending_id: 2,
          alara_name: "The Illuminated Path",
          alara_story:
            "Through cunning and strategy, Alara outsmarts the guardian of the forgotten temple. Her resourcefulness and the guidance of the Spirit of Balance lead her to uncover the true purpose of the Radiant Bloom. With newfound knowledge, she faces Aveline, the sorceress behind the curse, armed with the understanding of how to break it. Choosing a path of enlightenment and compassion, Alara successfully breaks the curse, bringing light back to Ethoria's once-darkened lands.",
        },
        {
          alara_ending_id: 3,
          alara_name: "Temptation's Toll",
          alara_story:
            "Overwhelmed by the allure of dark power, Alara succumbs to the temptation within the forgotten temple. In doing so, she loses her connection with the Spirit of Balance and becomes susceptible to darker influences. As she confronts Aveline, the sorceress manipulates her weakened state, using her to further her own malevolent plans. The land of Ethoria faces an uncertain and perilous future.",
        },
        {
          alara_ending_id: 4,
          alara_name: "The Guardian's Resolve",
          alara_story:
            "Alara embraces the weight of her responsibilities and decides to break the curse. With the Spirit of Balance by her side, she confronts Aveline, displaying unwavering determination and resolve. Their clash is fierce, but Alara's commitment to balance and her connection with the Radiant Bloom prove to be formidable forces. In a triumphant moment, Alara shatters the curse, returning peace and prosperity to Ethoria.",
        },
        {
          alara_ending_id: 5,
          alara_name: "Ethical Balance",
          alara_story:
            "Contemplating the consequences of her actions, Alara seeks a path that preserves the balance of nature and the well-being of Ethoria's inhabitants. She carefully weighs her decisions, making difficult sacrifices when necessary. In the end, Alara manages to find a solution that breaks the curse while minimizing harm to the land. Her choices earn her the respect of the creatures she protected, and Ethoria begins its journey to recovery.",
        },
        {
          alara_ending_id: 6,
          alara_name: "Compassionate Harmony",
          alara_story:
            "Believing in the power of compassion, Alara seeks peaceful resolutions to the ethical dilemmas she faces. Her empathy and understanding lead her to unexpected alliances and opportunities for healing. Through her compassion, she breaks the curse and fosters a new era of harmony and cooperation among the creatures of Ethoria. The land flourishes once more, united by a shared desire for peace and prosperity.",
        },
        {
          alara_ending_id: 7,
          alara_name: "Pragmatic Sacrifice",
          alara_story:
            "In the face of difficult decisions, Alara adopts a pragmatic approach, making sacrifices for the greater good. These choices are challenging, but they demonstrate her commitment to restoring balance to Ethoria. Her willingness to make tough decisions leads to the breaking of the curse and a brighter future for the realm. Though not without hardship, her pragmatic choices bring about meaningful change.",
        },
        {
          alara_ending_id: 8,
          alara_name: "Confrontation and Revelation",
          alara_story:
            "By confronting Aveline directly, Alara seeks answers to her questions and challenges the sorceress responsible for the suffering in Ethoria. The confrontation reveals hidden truths about Aveline's motives and the curse's origins. As their battle intensifies, Alara's connection to the Spirit of Balance guides her actions. In a surprising twist, the encounter leads to the revelation that Nyx and Alara share a mysterious connection, setting the stage for an unexpected alliance.",
        },
        {
          alara_ending_id: 9,
          alara_name: "Shadows of Intrigue",
          alara_story:
            "Opting for a more cautious approach, Alara observes Aveline from the shadows, learning more about her enemy and waiting for the right moment to strike. In doing so, Alara uncovers Aveline's dark plans and her connection to the cursed realm. As Alara plots her next move, she encounters Nyx, the Lost Cursebearer, who is on a quest of their own. Unbeknownst to both, their paths are destined to cross, and their meeting will change the fate of Ethoria forever.",
        },
        {
          alara_ending_id: 10,
          alara_name: "Unfulfilled Curiosity",
          alara_story:
            "Choosing not to dwell on the past, Alara focuses on the task at hand—finding the Radiant Bloom. She believes that understanding the curse can come later, once the land is healed. However, her curiosity remains unfulfilled, and the mysteries of the curse linger in the back of her mind. As she breaks the curse and restores Ethoria's balance, Alara's desire for answers grows stronger, setting the stage for future adventures and revelations.",
        },
      ]);
    })
    .then(function () {
      return knex("alara_choices").insert([
        // Scenario 1: The Healing Flower's Quest
        {
          alara_choice_id: 1,
          alara_description:
            "Embark on a perilous journey to find the Radiant Bloom.",
          alara_next_scenario_id: 2,
          alara_linked_ending_id: null,
          alara_linked_scenario_id: 1,
        },
        {
          alara_choice_id: 2,
          alara_description:
            "Seek an alternative solution or gather more information before proceeding.",
          alara_next_scenario_id: 3,
          alara_linked_ending_id: null,
          alara_linked_scenario_id: 1,
        },
        // Scenario 2: Trials of the Forgotten Temple
        {
          alara_choice_id: 3,
          alara_description:
            "Embrace the challenges of the temple and press forward.",
          alara_next_scenario_id: 4,
          alara_linked_ending_id: null,
          alara_linked_scenario_id: 2,
        },
        {
          alara_choice_id: 4,
          alara_description:
            "Doubt her abilities and consider turning back from the temple.",
          alara_next_scenario_id: 5,
          alara_linked_ending_id: null,
          alara_linked_scenario_id: 2,
        },
        // Scenario 3:The Guidance of Creatures
        {
          alara_choice_id: 5,
          alara_description:
            "Form an alliance with the creatures and seek their aid.",
          alara_next_scenario_id: 6,
          alara_linked_ending_id: null,
          alara_linked_scenario_id: 3,
        },
        {
          alara_choice_id: 6,
          alara_description: "Choose to rely on her own skills and instincts.",
          alara_next_scenario_id: 7,
          alara_linked_ending_id: null,
          alara_linked_scenario_id: 3,
        },
        //Scenario 4: The Guardian's Trial
        {
          alara_choice_id: 7,
          alara_description: "Engage the guardian in direct combat.",
          alara_next_scenario_id: null,
          alara_linked_ending_id: 1,
          alara_linked_scenario_id: 4,
        },
        {
          alara_choice_id: 8,
          alara_description:
            "Outsmart the guardian through cunning and strategy",
          alara_next_scenario_id: null,
          alara_linked_ending_id: 2,
          alara_linked_scenario_id: 4,
        },
        //Scenario 5: The Temptation of Darkness
        {
          alara_choice_id: 9,
          alara_description:
            "Resist the temptation and remain steadfast in her mission.",
          alara_next_scenario_id: 8,
          alara_linked_ending_id: null,
          alara_linked_scenario_id: 5,
        },
        {
          alara_choice_id: 10,
          alara_description:
            "Succumb to the temptation and face the consequences.",
          alara_next_scenario_id: null,
          alara_linked_ending_id: 3,
          alara_linked_scenario_id: 5,
        },
        //Scenario 6: Creatures' Insights
        {
          alara_choice_id: 11,
          alara_description:
            "Utilize the creatures' insights to overcome the temple's challenges.",
          alara_next_scenario_id: 4,
          alara_linked_ending_id: null,
          alara_linked_scenario_id: 6,
        },
        {
          alara_choice_id: 12,
          alara_description:
            "Encounter a challenge that tests the alliance's trust.",
          alara_next_scenario_id: 9,
          alara_linked_ending_id: null,
          alara_linked_scenario_id: 6,
        },
        //Scenario 7: The Temple's Mysteries
        {
          alara_choice_id: 13,
          alara_description:
            "Delve deeper into the temple's mysteries and learn its secrets.",
          alara_next_scenario_id: 10,
          alara_linked_ending_id: null,
          alara_linked_scenario_id: 7,
        },
        {
          alara_choice_id: 14,
          alara_description:
            "Choose not to dwell on the past and focus on the task at hand.",
          alara_next_scenario_id: null,
          alara_linked_ending_id: 10,
          alara_linked_scenario_id: 7,
        },
        //Scenario 8: The Burden of Choice
        {
          alara_choice_id: 15,
          alara_description:
            "Embrace the weight of her responsibilities and decide to break the curse.",
          alara_next_scenario_id: null,
          alara_linked_ending_id: 4,
          alara_linked_scenario_id: 8,
        },
        {
          alara_choice_id: 16,
          alara_description:
            " Contemplate the consequences of her actions and seek another solution.",
          alara_next_scenario_id: null,
          alara_linked_ending_id: 5,
          alara_linked_scenario_id: 8,
        },
        //Scenario 9: The Temptation of Darkness
        {
          alara_choice_id: 17,
          alara_description:
            "Prioritize compassion and find a peaceful resolution.",
          alara_next_scenario_id: null,
          alara_linked_ending_id: 6,
          alara_linked_scenario_id: 9,
        },
        {
          alara_choice_id: 18,
          alara_description:
            "Choose the path of pragmatism and make difficult sacrifices.",
          alara_next_scenario_id: null,
          alara_linked_ending_id: 7,
          alara_linked_scenario_id: 9,
        },
        //Scenario 10: Confrontation
        {
          alara_choice_id: 19,
          alara_description:
            "Confront Aveline directly, seeking answers and confrontation",
          alara_next_scenario_id: null,
          alara_linked_ending_id: 8,
          alara_linked_scenario_id: 10,
        },
        {
          alara_choice_id: 20,
          alara_description:
            "Avoid direct confrontation and observe Aveline from the shadows.",
          alara_next_scenario_id: null,
          alara_linked_ending_id: 9,
          alara_linked_scenario_id: 10,
        },
      ]);
    })
    
};
