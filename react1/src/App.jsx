// import styled from "styled-components";
import "./App.css";
import { Form, Container, Input, Button } from "./styled-components";

const inlineStyle = {
  height: "50px",
  width: "150px",
  background: "blue",
  border: "none",
  color: "red",
  borderRadius: "10px",
};

const App = () => {
  return (
    <>
      <Container>
        <Form>
          <Input placeholder="Enter your name" type="text"></Input>
          <Button>Submit</Button>
        </Form>
      </Container>

      <div className="flex justify-center items-center h-screen w-screen ">
        <div className="flex flex-col justify-center items-center h-[300px] w-[300px] bg-slate-700 rounded-lg ">
          <button style={inlineStyle}>Get Started</button>
          {/* Normal css */}
          <h1>This is react styling</h1>
          <h1 className="text">This is react styling</h1>
          {/* Using tailwind */}
          <div className="text-3xl text-red-600">App</div>
        </div>
      </div>
    </>
  );
};

export default App;
