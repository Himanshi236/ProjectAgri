import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height:600px;
    background-color: aqua;
    display:flex;
    align-items: center;
    justify-content: space-around;
    

`


const Card1 = styled.div`
  height: 400px;
  width: 400px;
  background-color: #9cee88;
  border-radius:20px;
  
  
`;

const Card2 = styled.div`
  height: 400px;
  width: 400px;
  background-color: #ee88df;
  border-radius: 20px;
`;

const Card3 = styled.div`
  height: 400px;
  width: 400px;
  background-color: red;
  border-radius: 20px;
`;

const Content=styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    margin: 30px;
    
`
function Cards() {
  return (
    <Container>
      <Card1>
        <Content>
          <h1>Blog1</h1>
          
        </Content>
      </Card1>
      <Card2>
        <Content>
          <h1>Blog2</h1>
        </Content>
      </Card2>

      <Card3>
        <Content>
          <h1>Blog3</h1>
        </Content>
      </Card3>
    </Container>
  );
}

export default Cards