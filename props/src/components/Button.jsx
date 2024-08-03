import React from "react";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tab from "./Tab";
import { Examples } from "../data";

function Button() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(buttonClicked) {
    setSelectedTopic(buttonClicked);
    // console.log(selectedTopic);
  }

  return (
    <Section title={"Examples"} id="examples">
      <Tab
        ButtonContainer="menu"
        button={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic && <p>Please select a topic</p>}
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
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{Examples[selectedTopic].title}</h3>
            <p>{Examples[selectedTopic].description}</p>
            <pre>
              <code>{Examples[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}
      </Tab>
    </Section>
  );
}
export default Button;
