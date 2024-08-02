import { useState } from "react";
import Header from "./components/header/Header";
import CoreConcept from "./components/CoreConcept";
import { CoreConceptData } from "./data";
import TabButton from "./components/TabButton";
import { Examples } from "./data";
import "./App.css";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(buttonClicked) {
    setSelectedTopic(buttonClicked);
    console.log(selectedTopic);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CoreConceptData.map((el) => {
              return <CoreConcept key={el.title} {...el} />;
            })}
          </ul>
        </section>
      </main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => {
              handleSelect("components");
            }}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => {
              handleSelect("jsx");
            }}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => {
              handleSelect("props");
            }}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => {
              handleSelect("state");
            }}
          >
            State
          </TabButton>
        </menu>
        {!selectedTopic && (
          <p style={{ textAlign: "center" }}>Please select a topic</p>
        )}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{Examples[selectedTopic].title}</h3>
            <p>{Examples[selectedTopic].description}</p>
            <pre>
              <code>{Examples[selectedTopic].code}</code>
            </pre>
          </div>
        )}

        {/* or use second method- */}

        {/* {!selectedTopic ? (
          <p style={{ textAlign: 'center' }}>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{Examples[selectedTopic].title}</h3>
            <p>{Examples[selectedTopic].description}</p>
            <pre>
              <code>{Examples[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}
      </section>
    </>
  );
}

export default App;
