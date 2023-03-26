import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
  background-color: #365b33;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Left = styled.div`
  flex: 1;
  color: white;
  cursor: default;
`;

const Center = styled.div`
  flex: 1;
  color: white;
  
  font-size:40px;
  cursor: default;
`;

const Right = styled.div`
  flex: 1;
  color: white;
  
  display:flex;
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