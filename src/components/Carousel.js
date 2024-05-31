import React from "react";
import { Carousel } from "react-responsive-carousel";

const bgImages = [
  {
    title: "Scotland Forever!, the charge of the Scots Greys at Waterloo",
    author: "Elizabeth Thompson",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Scotland_Forever%21.jpg/2880px-Scotland_Forever%21.jpg"
  },
  {
    title: "Washington Crossing the Delaware",
    author: "Emanuel Leutze",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg/2560px-Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg"
  },
  {
    title: "Bonaparte Before the Sphinx",
    author: "Jean-Léon Gérôme",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bonaparte_ante_la_Esfinge%2C_por_Jean-L%C3%A9on_G%C3%A9r%C3%B4me.jpg/2560px-Bonaparte_ante_la_Esfinge%2C_por_Jean-L%C3%A9on_G%C3%A9r%C3%B4me.jpg"
  },
  {
    title: "Daniel Boone escorting settlers through the Cumberland Gap",
    author: "George Caleb Bingham",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/George_Caleb_Bingham_-_Daniel_Boone_escorting_settlers_through_the_Cumberland_Gap.jpg/1600px-George_Caleb_Bingham_-_Daniel_Boone_escorting_settlers_through_the_Cumberland_Gap.jpg"
  },
  {
    title: "Ivan the Terrible and His Son Ivan",
    author: "Ilya Repin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Iv%C3%A1n_el_Terrible_y_su_hijo%2C_por_Ili%C3%A1_Repin.jpg/1920px-Iv%C3%A1n_el_Terrible_y_su_hijo%2C_por_Ili%C3%A1_Repin.jpg"
  },
  {
    title: "Fight for a Turkish Standard",
    author: "Józef Brandt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/J%C3%B3zef_Brandt_-_Fight_for_a_Turkish_Standard_-_MNK_II-a-1318_-_National_Museum_Krak%C3%B3w.jpg/2880px-J%C3%B3zef_Brandt_-_Fight_for_a_Turkish_Standard_-_MNK_II-a-1318_-_National_Museum_Krak%C3%B3w.jpg"
  },
  {
    title: "Liberty Leading the People",
    author: "Eugène Delacroix",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1920px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg"
  },
  {
    title: "The Surrender of Breda",
    author: "Diego Velázquez",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Velazquez-The_Surrender_of_Breda.jpg/1200px-Velazquez-The_Surrender_of_Breda.jpg"
  },
  {
    title: "The Third of May",
    author: "Francisco Goya",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/1920px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg"
  },
  {
    title: "Vive L'Empereur",
    author: "Edouard Detaille",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Edouard_Detaille_-_Vive_L%27Empereur_-_Google_Art_Project.jpg/1920px-Edouard_Detaille_-_Vive_L%27Empereur_-_Google_Art_Project.jpg"
  },
  {
    title: "Cavalry Charge on the Southern Plains",
    author: "Frederic Remington",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Cavalry_Charge_on_the_Southern_Plains.jpg"
  },
  {
    title: "Friedland",
    author: "Ernest Meissonier",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/1807%2C_Friedland.jpg"
  }
];

export default () => (
  <Carousel
    autoPlay
    stopOnHover={false}
    autoFocus
    infiniteLoop
    interval={5000}
    emulateTouch={true}
    useKeyboardArrows={true}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
  >
    {bgImages.map((item) => (
      <div>
        <img alt="" src={item.image} />
        <a
          href="https://history-maps.com/"
          target="_blank"
          rel="noreferrer"
          style={{ cursor: "pointer" }}
        >
          <p className="title">
            {item.title} by {item.author}
          </p>
        </a>
      </div>
    ))}
  </Carousel>
);
