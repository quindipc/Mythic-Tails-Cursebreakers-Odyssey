exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users_creatures").del();
  await knex("users_creatures").insert([
    {
      user_id: 1,
      creature_id: 1,
      type: "Vexwood Nymph",
      description:
        "Once vibrant and full of life, Vexwood Nymphs were guardian spirits of the enchanted forests. However, under the curse, their once-lush foliage has withered, and they are now cursed to wander as spectral beings.",
      traits:
        "Whispering Gaze: Can sense danger and hidden paths, guiding Alara through treacherous terrains.\n" +
        "Nature's Embrace: Their touch can heal wounds and purify tainted waters, aiding Alara in her journey.\n" +
        "Waning Foliage: As the curse takes its toll, their presence weakens, reducing their effectiveness over time.",
    },
    {
      user_id: 2,
      creature_id: 2,
      type: "Moonfire Phoenix",
      description:
        "Moonfire Phoenixes were majestic guardians of the night skies, their plumage glowing with the radiance of the moon. Under the curse, their once-brilliant flames have dimmed, and they now find themselves trapped in a cycle of perpetual twilight.",
      traits:
        "Luminous Flight: Can carry Alara across great distances and illuminate dark dungeons.\n" +
        "Resilient Flame: The phoenix's healing tears can mend wounds and revitalize Alara, but their tears are limited by their dwindling powers.\n" +
        "Eternal Dusk: As the curse intensifies, their fire wanes, reducing their ability to battle foes as effectively.",
    },
    {
      user_id: 3,
      creature_id: 3,
      type: "Shadowgloom Gargoyle",
      description:
        "Once protectors of sacred places, Shadowgloom Gargoyles are now cursed to dwell in darkness, their stone forms now infused with shadows and malevolence.",
      traits:
        "Stone Shield: Their sturdy stone bodies can protect Alara from physical attacks and provide cover during battles.\n" +
        "Shadow Pounce: Can ambush enemies by vanishing into shadows and reappearing to strike with surprise attacks.\n" +
        "Dwindling Vigor: As the curse consumes them, their stony forms become more brittle, reducing their defensive capabilities.",
    },
  ]);
};
