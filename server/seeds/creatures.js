exports.seed = function (knex) {
  // Deletes ALL existing entries from the creatures table
  return knex("creatures")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("creatures").insert([
        {
          id: 1,
          type: "Vexwood Nymph",
          description:
            "Once vibrant and full of life, Vexwood Nymphs were guardian spirits of the enchanted forests. However, under the curse, their once-lush foliage has withered, and they are now cursed to wander as spectral beings.",
          traits:
            "Whispering Gaze: Can sense danger and hidden paths, guiding Alara through treacherous terrains.\n" +
            "Nature's Embrace: Their touch can heal wounds and purify tainted waters, aiding Alara in her journey.\n" +
            "Waning Foliage: As the curse takes its toll, their presence weakens, reducing their effectiveness over time.",
        },
        {
          id: 2,
          type: "Moonfire Phoenix",
          description:
            "Moonfire Phoenixes were majestic guardians of the night skies, their plumage glowing with the radiance of the moon. Under the curse, their once-brilliant flames have dimmed, and they now find themselves trapped in a cycle of perpetual twilight.",
          traits:
            "Luminous Flight: Can carry Alara across great distances and illuminate dark dungeons.\n" +
            "Resilient Flame: The phoenix's healing tears can mend wounds and revitalize Alara, but their tears are limited by their dwindling powers.\n" +
            "Eternal Dusk: As the curse intensifies, their fire wanes, reducing their ability to battle foes as effectively.",
        },
        {
          id: 3,
          type: "Lamenting Kitsune",
          description:
            "Kitsunes were clever and playful fox spirits known for their enchanting abilities. Under the curse, they've lost their playful demeanor, and their sorrowful wails echo through the cursed woods.",
          traits:
            "Illusory Tricks: Can create illusions to distract enemies and mislead them in battle.\n" +
            "Heartrending Cry: Can temporarily weaken enemies with their mournful wails, making them vulnerable to attacks.\n" +
            "Weakened Shroud: As the curse's hold tightens, their illusions become less potent and easier for enemies to see through.",
        },
        {
          id: 4,
          type: "Shadowgloom Gargoyle",
          description:
            "Once protectors of sacred places, Shadowgloom Gargoyles are now cursed to dwell in darkness, their stone forms now infused with shadows and malevolence.",
          traits:
            "Stone Shield: Their sturdy stone bodies can protect Alara from physical attacks and provide cover during battles.\n" +
            "Shadow Pounce: Can ambush enemies by vanishing into shadows and reappearing to strike with surprise attacks.\n" +
            "Dwindling Vigor: As the curse consumes them, their stony forms become more brittle, reducing their defensive capabilities.",
        },
        {
          id: 5,
          type: "Spectral Siren",
          description:
            "Sirens were once enchanting singers whose melodies soothed and brought harmony. Under the curse, their voices have become haunting echoes that trap and torment lost souls.",
          traits:
            "Enchanting Lullaby: Can temporarily charm enemies or calm aggressive creatures encountered on the journey.\n" +
            "Ethereal Resonance: Can communicate with spirits and ancient entities, uncovering hidden knowledge and secrets.\n" +
            "Fading Echoes: As the curse binds them tighter, their songs lose their potency and can even lead to unintended consequences when trying to control foes.",
        },
        {
          id: 6,
          type: "Soulbound Wraith",
          description:
            "Soulbound Wraiths were once benevolent protectors of sacred burial grounds. Now, they are cursed spirits trapped between realms, forced to feed on the essence of living creatures to sustain their existence.",
          traits:
            "Spectral Drift: Can phase through obstacles and access hidden passages in dungeons and ruins.\n" +
            "Soul Siphon: Can drain the life force of weakened enemies, restoring health and magical power to Nyx.\n" +
            "Haunted Instability: As the curse lingers, their spectral form becomes more volatile and susceptible to disruption.",
        },
        {
          id: 7,
          type: "Twilight Harbinger",
          description:
            "Once harbingers of twilight's beauty, these beings now exist in a perpetual state of melancholy twilight. They are cursed to emit an aura of despair that spreads throughout the land.",
          traits:
            "Twilight Veil: Can cloak Nyx in twilight's shadow, making them nearly invisible to enemies for stealthy approaches.\n" +
            "Despair's Embrace: Can channel their aura of despair to weaken foes and make them more vulnerable to Nyx's attacks.\n" +
            "Fading Luminescence: As the curse deepens, their once-illuminating presence wanes, making it harder to harness their stealth and weakening their aura.",
        },
        {
          id: 8,
          type: "Crimson Serpent",
          description:
            "Crimson Serpents were protectors of sacred fire, symbolizing life and renewal. Now, they are cursed to slither through a land devoid of light, their flames tainted by the curse.",
          traits:
            "Burning Serpent: Can unleash fiery attacks to incinerate enemies and clear obstacles blocking Nyx's path.\n" +
            "Ember's Blessing: Their cursed flames can momentarily enhance Nyx's dark powers, granting them a boost in combat.\n" +
            "Diminishing Flames: As the curse spreads, their flames become weaker, reducing the effectiveness of their attacks.",
        },
        {
          id: 9,
          type: "Gloomvine Elemental",
          description:
            "Gloomvine Elementals were guardians of the sacred forests, embodying the vitality of nature. Now, they are cursed to be twisted and corrupted vines, choking the life out of the cursed land.",
          traits:
            "Nature's Grasp: Can summon entangling vines to immobilize enemies and create barriers for defense.\n" +
            "Cursed Thorns: Can inflict venomous wounds on foes, weakening them in combat.\n" +
            "Withering Vigor: As the curse consumes them, their ability to manipulate nature diminishes, making their vines less formidable.",
        },
        {
          id: 10,
          type: "Eclipse Owl",
          description:
            "Owls were revered as wise creatures and watchers of the night. Under the curse, their once-wise gazes are shrouded in darkness, and they are doomed to forever fly in an eclipse.",
          traits:
            "Silent Wings: Can carry Nyx above enemies and observe the surroundings for potential threats or treasures.\n" +
            "Eclipse Gaze: Can briefly blind enemies with an overwhelming burst of darkness, stunning them in battle.\n" +
            "Waning Insight: As the curse persists, their once-penetrating vision dims, making it harder for them to spot hidden secrets and dangers.",
        },
      ]);
    });
};
