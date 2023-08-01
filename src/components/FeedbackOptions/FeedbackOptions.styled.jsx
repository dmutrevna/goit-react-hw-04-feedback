import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 20%;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s;
  margin-left: 30px;
  width: 80px;

  &:hover {
    background-color: gray;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #4caf50;
  }
`;
