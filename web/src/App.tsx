import React, { createElement, useState } from "react";
import "./App.css";

//JSX: Sintaxe de XML dentro do Javascript
//import Header from "./Header";
//import Home from "./pages/Home";
import Routes from "./routes";

function App() {
  /*
  //let counter = 1;
  const [counter, setCounter] = useState(0); //[valor do estado. função pra atualizar o valor do estado]

  function handleButtonClick() {
    //counter++;
    setCounter(counter + 1);
    console.log(counter);
  }
  */
  /*
  return (
    React,
    createElement("h1", {
      children: "Hello Wordl",
    })
  );
  */
  return (
    /*
    <div>
      
      <Header title={`Contador: ${counter}`} />

      <h1>Conteúdo da aplicação</h1>

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>
        Aumentar
      </button>
      
      <h1>Hello World</h1>
    </div>
    */
    <Routes />
  );
}

export default App;
