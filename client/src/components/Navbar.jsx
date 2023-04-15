import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
  font-family: Roboto, sans-serif;
  cursor: pointer;
`;
const Left = styled.div`
  flex: 1;
  color: #d0ba2c;
  cursor: default;
`;

const Center = styled.div`
  flex: 1;
  color: #d0ba2c;
  font-weight: 500;
  font-size: 40px;
  cursor: default;
`;

const Right = styled.div`
  flex: 1;
  color: #d0ba2c;

  display: flex;
`;

const Item=styled.div`
    flex: 1;
    
`

function Navbar() {
  return (
    <Container>
      <Left>LOGO</Left>

      <Center>KRISHI VIHAR</Center>

      <Right>
        <Item>Blogs</Item>
        <Item>Login</Item>
        <Item>Register</Item>
        <Item>Schemes</Item>
        <Item>Contact</Item>
      </Right>
    </Container>
  );
}

export default Navbar