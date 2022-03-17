import React, { useState } from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { HiChartSquareBar } from "react-icons/hi";
import {
  BsShieldFillX,
  BsFillXSquareFill,
  BsFillCheckSquareFill,
  BsHeartFill,
} from "react-icons/bs";
import "./PrepInfo.css";
const AccordionContent = [
  {
    icon: BsShieldFillX,
    title: "avoid alcoholic beverages",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus incidunt eveniet dolorum, ipsa repellat excepturi sint. Eveniet, sequi reprehenderit!",
  },
  {
    icon: BsFillXSquareFill,
    title: "avoid stress",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus incidunt eveniet dolorum, ipsa repellat excepturi sint. Eveniet, sequi reprehenderit!",
  },
  {
    icon: HiChartSquareBar,
    title: "eat healthy food",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus incidunt eveniet dolorum, ipsa repellat excepturi sint. Eveniet, sequi reprehenderit!",
  },
  {
    icon: BsFillCheckSquareFill,
    title: "get enough sleep",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus incidunt eveniet dolorum, ipsa repellat excepturi sint. Eveniet, sequi reprehenderit!",
  },
  {
    icon: BsHeartFill,
    title: "exercise or physical activity",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus incidunt eveniet dolorum, ipsa repellat excepturi sint. Eveniet, sequi reprehenderit!",
  },
];
const Accordion = ({ Component, title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={isActive ? 'accordion active' : 'accordion'}>
        <div
          onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
          className="accordion-container"
        >
          <div className="accordion-header">
            <div className="icon-container">
              <Component />
            </div>
            <h3>{title}</h3>
          </div>
          <div className="icon-container">
            {!isActive ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
          </div>
        </div>
        <div className="accordion-content">
          <p className="p-text">{content}</p>
        </div>
      </div>
    </>
  );
};

const PrepInfo = () => {
  return (
    <div className="app__prep app__container">
      <div className="app__prep-img">
        <img src={images.woman} alt="woman" />
      </div>
      <div className="app__prep-info">
        <SubHeading title="preparations before vaccine" />
        <p className="p-text">
          the success of vaccines is strongly influenced by the strength of the
          body's immune system. therefore, the are several things that can be
          tried to make the COVID-19 vaccine work:
        </p>
        <div className="app__prep-accordions">
          {AccordionContent.map((content, index) => (
            <Accordion
              key={index}
              Component={content.icon}
              title={content.title}
              content={content.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrepInfo;
