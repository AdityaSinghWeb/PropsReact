import headImg from "./assets/react-core-concepts.png";
import { CoreConceptData } from "./data.js";
import "./App.css";

const paraInput = ["Fundamental", "Crucial", "Core"];
function paraInputSelect(max) {
  return Math.floor(Math.random() * (max + 1));
}
let parValue = paraInput[paraInputSelect(2)];

function Header() {
  return (
    <header>
      <img src={headImg} alt="" />
      <h1>React Essentials</h1>
      <p>
        {parValue} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}

function CoreConcept({ img, title, description }) {
  return (
    <li>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CoreConceptData[0]} />
            <CoreConcept {...CoreConceptData[1]} />
            <CoreConcept {...CoreConceptData[2]} />
            <CoreConcept {...CoreConceptData[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
