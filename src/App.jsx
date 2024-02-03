import { useState } from "react";
import "./App.css";
import { BusinessCard } from "../component/BusinessCard";

function App() {
  const [name, setName] = useState("Name");
  const [descp, setDescp] = useState("short description");
  const [number, setNumber] = useState("number");
  const [email, setEmail] = useState("email id");
  const [linkedin, setLinkedin] = useState("linkedIn url with https");
  return (
    <div>

      <form>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          name="descp"
          placeholder="enter short description"
          onChange={(e) => setDescp(e.target.value)}
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="enter phone number"
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          name="linkedin"
          placeholder="enter linkedin url"
          onChange={(e) => setLinkedin(e.target.value)}
        ></input>
        {/* <button type="submit">Submit</button> */}
      </form>

      <BusinessCard
        name={name}
        description={descp}
        phone={number}
        linkedIn={linkedin} //pass as https or it will not open
        email={email}
      />
      
    </div>
  );
}

export default App;
