exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("creature_details").del();
  await knex("creature_details").insert([
    {
      creature_id: 1,
      name: "Vexy", // Name that the user gives to the adopted creature
      type: "Vexwood Nymph",
      description:
        "Once vibrant and full of life, Vexwood Nymphs were guardian spirits of the enchanted forests. However, under the curse, their once-lush foliage has withered, and they are now cursed to wander as spectral beings.",
      traits:
        "Whispering Gaze: Can sense danger and hidden paths, guiding Alara through treacherous terrains.\n" +
        "Nature's Embrace: Their touch can heal wounds and purify tainted waters, aiding Alara in her journey.\n" +
        "Waning Foliage: As the curse takes its toll, their presence weakens, reducing their effectiveness over time.",
    },
    {
      creature_id: 2,
      name: "Moonee", // Name that the user gives to the adopted creature
      type: "Moonfire Phoenix",
      description:
        "Moonfire Phoenixes were majestic guardians of the night skies, their plumage glowing with the radiance of the moon. Under the curse, their once-brilliant flames have dimmed, and they now find themselves trapped in a cycle of perpetual twilight.",
      traits:
        "Luminous Flight: Can carry Alara across great distances and illuminate dark dungeons.\n" +
        "Resilient Flame: The phoenix's healing tears can mend wounds and revitalize Alara, but their tears are limited by their dwindling powers.\n" +
        "Eternal Dusk: As the curse intensifies, their fire wanes, reducing their ability to battle foes as effectively.",
    },
    {
      creature_id: 3,
      name: "Lamee", // Name that the user gives to the adopted creature
      type: "Lamenting Kitsune",
      description:
        "Kitsunes were clever and playful fox spirits known for their enchanting abilities. Under the curse, they've lost their playful demeanor, and their sorrowful wails echo through the cursed woods.",
      traits:
        "Illusory Tricks: Can create illusions to distract enemies and mislead them in battle.\n" +
        "Heartrending Cry: Can temporarily weaken enemies with their mournful wails, making them vulnerable to attacks.\n" +
        "Weakened Shroud: As the curse's hold tightens, their illusions become less potent and easier for enemies to see through.",
    },


  ]);
};
