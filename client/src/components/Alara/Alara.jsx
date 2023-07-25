import React from "react";

export default function Alara() {
  return (
    <>
      <section className="alara">
        <h1 className="alara__title">Alara, The Cursed Guardian</h1>
        {/* Next button to continue the story  */}
        <button className="alara__next">Next</button>
        {/* Need to display these one at a time -- add logic on the button*/}
        <p className="alara__prologue">
          In the realm of Ethoria, the once-vibrant forests had withered, and
          the lands lay desolate under an ominous dark sky. The creatures that
          once lived in harmony now suffered under an ancient curse cast by the
          sorceress, Aveline. Her desire for ultimate power had corrupted her
          heart, and the curse had spread like a deadly plague, engulfing every
          corner of the once-prosperous land.
        </p>
        {/* Next button to continue the story -- add logic on button */}
        <button className="alara__next">Next</button>
        <p className="alara__prologue">
          Among the survivors, a young guardian named Alara stood as the last
          glimmer of hope. Alara was chosen by the Spirit of Balance, a mystical
          entity that embodied the essence of nature and humanity's symbiotic
          connection. With her gift of communing with creatures and harnessing
          the latent magic of the land, Alara took on the burden of breaking the
          curse and restoring Ethoria to its former glory.
        </p>
        {/* Next button to continue the story -- add logic on button */}
        <button className="alara__next">Next</button>
        <p className="alara__prologue">
          The Spirit of Balance guided Alara on her journey, appearing as a
          soft, glowing light that only she could see. As she ventured through
          the cursed forests, Alara encountered an ailing forest spirit named
          Elowen. The spirit's once-lustrous glow was now dim, and tears of
          despair fell like dew from its ethereal form.
        </p>
        {/* Next button to continue the story -- add logic on button */}
        <button className="alara__next">Next</button>
        <p className="alara__prolgoue">
          "Guardian," Elowen whispered in a faint voice, "the heart of the
          forest withers, and my brethren suffer. Only a special healing flower,
          the Radiant Bloom, hidden within the dangerous ruins of the forgotten
          temple, can mend our home. Please, save us."
        </p>

        {/* Need to map over the scenario, story and choices based on the users choices */}
        <h2 className="alara__scenario"></h2>
        <p className="alara__story"></p>
        <button className="alara__button--option1"></button>
        <button className="alara__button--option2"></button>
      </section>
    </>
  );
}
