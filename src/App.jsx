import ReactDOM from "react-dom";
import styled from "styled-components";
import Section from "./components/Section";

const Title = styled.h1`
  color: #b19cd9;
`;
import "./App.css";

function App() {
  return (
    <>
      <Title>Progress Tracker</Title>
      <div>
        <Section text="M" progress="100%" />
        <Section text="T" progress="10%" />
        <Section text="W" progress="90%" />
        <Section text="T" progress="30%" />
        <Section text="F" progress="40%" />
        <Section text="S" progress="50%" />
        <Section text="S" progress="60%" />
      </div>
    </>
  );
}

export default App;
