import React from "react";
import logo from "./logo.png";
import "./App.css";
import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';
import { motion, harmony, cataclysm } from "./data/data";
import theme from './data/theme';


const data = [
  {
    id: 'first-skill',
    title: 'The root node',
    tooltip: {
      description: "The parent node, all of the descendants will be locked until it's selected",
    },
    children: [
      // rinse and repeat; always repeat.
    ]
  }
]


function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "150px", margin: "0 auto" }}>
        <img
          style={{ width: "500px", height: "200px" }}
          src={logo}
          alt="borderlands logo."
        />
      </div>
      <SkillProvider>
        <SkillTreeGroup theme={theme}>
          {() => {
            return (
              <React.Fragment>
                <SkillTree treeId="motion" title="Motion" data={motion} />
                <SkillTree treeId="harmony" title="Harmony" data={harmony} />
                <SkillTree treeId="cataclysm" title="Cataclysm" data={cataclysm} />
              </React.Fragment>
            )
          }}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}

export default App;
