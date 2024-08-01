import imgOne from "./assets/components.png";
import imgTwo from "./assets/config.png";
import imgThree from "./assets/jsx-ui.png";
import imgFour from "./assets/state-mgmt.png";

export const CoreConceptData = [
  {
    img: imgOne,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    img: imgTwo,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    img: imgThree,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    img: imgFour,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];
