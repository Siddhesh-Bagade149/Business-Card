import { useState } from "react";
import "./App.css";
import { BusinessCard } from "../component/BusinessCard";

let inputData = {};
function handleSubmit(e) {
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  // You can pass formData as a fetch body directly:
  // fetch('/some-api', { method: form.method, body: formData });

  // Or you can work with it as a plain object:
  // console.log(formData.entries())
  const formJson = Object.fromEntries(formData.entries());

  // console.log(formJson);
  inputData = formJson;
}
console.log(inputData);

function App() {
  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="enter name"></input>
        <input
          type="text"
          name="descp"
          placeholder="enter short description"
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="enter phone number"
        ></input>
        <input type="text" name="email" placeholder="enter email"></input>
        <input
          type="text"
          name="linkedin"
          placeholder="enter linkedin url"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <BusinessCard
        name={inputData.name}
        description={inputData.descp}
        phone={inputData.number}
        linkedIn={inputData.linkedin} //pass as https or it will not open
        email={inputData.email}
      />
    </div>
  );
}

export default App;
