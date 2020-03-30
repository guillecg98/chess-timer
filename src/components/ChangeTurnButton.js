import React from 'react'
import styled from 'styled-components'

const MyButton = styled.button`
  color: black;
  border-color: lightslategray;
  font-size: x-large;
  padding: 25px;
  border-radius: 86px;
  margin-top: 20px;
  justify-self: center;
`;

const ChangeTurnButton = ({text}) => (
    <MyButton>
        {text}
    </MyButton>
);

export default ChangeTurnButton;