import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  height: 400px;
  width: 400px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Input = styled.input`
  height: 50px;
  width: 250px;
  outline: none;
  border-radius: 10px;
  border: 1px solid black;
`;
export const Button = styled.button`
  height: 50px;
  width: 150px;
  margin-top: 20px;
  background: purple;
  border: none;
  border-radius: 10px;
`;
