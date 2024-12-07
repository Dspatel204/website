import { useState } from "react";
import RoundImg from "./assets/image 62.png";
import OvalImg from "./assets/image 63.png";
import MarquiseImg from "./assets/image 64.png";
import EmeraldImg from "./assets/image 65.png";
import PearImg from "./assets/image 66.png";
import CushionImg from "./assets/image 67.png";
import RadiantImg from "./assets/image 68.png";
import PrincessImg from "./assets/image 69.png";

const ringsData = [
  {
    name: "Round",
    imgSrc: RoundImg,
  },
  {
    name: "Oval",
    imgSrc: OvalImg,
  },
  {
    name: "Marquise",
    imgSrc: MarquiseImg,
  },
  {
    name: "Emerald",
    imgSrc: EmeraldImg,
  },
  {
    name: "Pear",
    imgSrc: PearImg,
  },
  {
    name: "Cushion",
    imgSrc: CushionImg,
  },
  {
    name: "Radiant",
    imgSrc: RadiantImg,
  },
  {
    name: "Princess",
    imgSrc: PrincessImg,
  },
];

const RingsSection = () => {
  const [SelectedRing, setSelectedRing] = useState("Round");
  return (
    <section className="rings-section">
      <h2 className="rings-title">Rings</h2>
      <div className="rings-divider">
        <span className="divider-line"></span>
        <span className="divider-icon">⟡</span>
        <span className="divider-line"></span>
      </div>
      <div className="rings-grid">
        {ringsData.map((ring, index) => (
          <div
            key={index}
            className="ring-item"
            onClick={() => {
              setSelectedRing(ring.name);
            }}
          >
            <img src={ring.imgSrc} alt={ring.name} className="ring-image" />
            <p
              className={`ring-name ${
                ring.name === SelectedRing ? "highlighted" : ""
              }`}
            >
              {ring.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RingsSection;
