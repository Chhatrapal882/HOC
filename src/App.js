import React from "react";
import Button from "./Button";
import { NewFunc } from "./NewFunc";

function App() {
  const Rendercomponent = NewFunc(Button);
  return (
    <div>
      <Rendercomponent onClick={(e) => console.log("hello")} color="white">
        click here
      </Rendercomponent>
    </div>
  );
}

export default App;
