import React, { useState } from "react";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import DropDown from "./components/DropDown";
import Search from "./components/Search";
import Route from "./components/Route";
import Header from "./components/Header";

const options = [
  {
    label: "virus",
    value: "blue",
    title: "virus",
    content: "vermelho",
  },
  {
    label: "praca",
    value: "verde",
    title: "praca",
    content: "vermelho",
  },
  {
    label: "carro",
    value: "vermelho",
    title: "carro",
    content: "vermelho"
  },
];

const App = () => {
  const [selected, onSelectedChange] = useState(options[0]);

  return (
    <div className="ui container" style={{ padding: 10 }}>
      <Header />
      <Route path="/">
        <Accordion items={options} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={onSelectedChange}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
