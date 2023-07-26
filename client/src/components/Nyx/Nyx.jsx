import React from "react";

export default function Nyx() {
  return (
    <>
      <section className="nyx">
        <h1 className="nyx__title">Nyx, The Lost Cursebearer</h1>
        {/* Next button to continue the story  */}
        <button className="nyx__next">Next</button>
        {/* Need to display these one at a time -- add logic on the button*/}
        <p className="nyx__prologue">
          In the realm of Ethoria, where darkness casts a shadow upon the land,
          a mysterious figure known as the Lost Cursebearer roams aimlessly.
          Veiled in obscurity, the Cursebearer is known as Nyx, a name whispered
          in hushed tones among the cursed inhabitants of the desolate realm.
          Nyx has long forgotten their true identity, plagued by visions that
          feel like fragmented memories from another life.
        </p>
        {/* Next button to continue the story -- add logic on button */}
        <button className="nyx__next">Next</button>
        <p className="nyx__prologue">
          In the heart of Ethoria's cursed lands, where once-thriving forests
          had withered, and the creatures suffer under the malevolence of the
          sorceress Aveline's curse, Nyx emerges as an enigmatic being.
          Unbeknownst to Nyx, they possess an innate ability to wield dark
          magic, tapping into the suffering of the cursed creatures and
          channeling it into formidable power. Guided by cryptic whispers and
          haunting visions, Nyx finds themselves inexorably drawn towards a
          mysterious artifact known as the "Tear of Radiance."
        </p>
        {/* Next button to continue the story -- add logic on button */}
        <button className="nyx__next">Next</button>
        <p className="nyx__prologue">
          Rumors and legends whisper that the Tear of Radiance holds the power
          to break even the most potent enchantments and lift curses from the
          land. Nyx believes that obtaining this artifact will hold the key to
          their true purpose and identity. The visions they experience show them
          an elusive figure, the sorceress Aveline, who is both the source of
          the curse and a reflection of Nyx's dark abilities.
        </p>
        {/* Next button to continue the story -- add logic on button */}
        <button className="nyx__next">Next</button>
        <p className="nyx__prolgoue">
          Guided by cryptic whispers and haunting visions, Nyx embarked on a
          relentless pursuit of the Tear of Radiance, which was rumored to be
          hidden within the ruins of an ancient village long abandoned by
          civilization. As they approached the ghostly village, Nyx stumbled
          upon a pitiful sight - a cursed creature, its eyes filled with terror.
        </p>
        {/* Next button to continue the story -- add logic on button */}
        <button className="nyx__next">Next</button>
        {/* Need to map over the scenario, story and choices based on the users choices */}
        <h2 className="nyx__scenario"></h2>
        <p className="nyx__story"></p>
        <button className="nyx__button--option1"></button>
        <button className="nyx__button--option2"></button>
      </section>
    </>
  );
}
