import React from 'react'
import styled from 'styled-components'

import { Copyright, Facebook, Instagram, Twitter } from '@material-ui/icons';

const Container = styled.div`
    height: 200px;
    background-color: #010101;
    display: flex;
    justify-content: center;

`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* color: white; */
  color: #d0ba2c;
`;
const Icons=styled.div`
  display:flex;
  justify-content:space-evenly;
  margin-bottom: 10px;
  

  
`

const Text = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;
function Footer() {
  return (
    <Container>
      <Wrapper>
        <Icons>
          <Facebook></Facebook>
          <Twitter></Twitter>
          <Instagram></Instagram>
        </Icons>
        <Text>Terms of Use</Text>
        <Text>Privacy Policy</Text>
        <Text><Copyright></Copyright> Copyright 2023</Text>
      </Wrapper>
    </Container>
  );
}

export default Footer