import React from 'react'
import styled from 'styled-components'

const MyButton = styled.button`
  color: black;
  border-color: lightslategray;
  font-size: large;
  padding: 10px;
  border-radius: 86px;
  margin-top: 15px;
  justify-self: center;
`;

const StartGameButton = ({action,text}) => (
    <MyButton onClick={action}>
        {text}
    </MyButton>
);

export default StartGameButton;