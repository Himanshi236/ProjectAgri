import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height:600px;
    background-color: gray;
    display:flex;
    align-items: center;
    justify-content: space-around;
    

`


const Card1 = styled.div`
  height: 400px;
  width: 400px;
  background-color: white;
  border-radius: 20px;
  &:hover {
    color: white;
    background-color: #089608;
  }
  transition:all ease 1s;
`;

const Card2 = styled.div`
  height: 400px;
  width: 400px;
  background-color: white;
  border-radius: 20px;
  &:hover {
    color: white;
    background-color: #089608;
    opacity: 0.4;
  }
  transition: all ease 1s;
`;

const Card3 = styled.div`
  height: 400px;
  width: 400px;
  background-color: white;
  border-radius: 20px;
  &:hover {
    color: white;
    background-color: #089608;
  }
  transition: all ease 1s;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 30px;
  &:hover {
    color: white;
    background-color: #089608;
  }
  transition: all ease 1s;
`;

const Image = styled.div`
  height: 10%;
  width: 50%;
  &:hover {
    color: white;
    background-color: #089608;
  }
  transition: all ease 1s;
`;

const Text=styled.div`
margin-top:20px;
  
`
function Cards() {
  return (
    <Container>
      <Card1>
        <Content>
          <Image>
            <img
              src="https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg?size=626&ext=jpg&ga=GA1.2.50035596.1672850077&semt=sph"
              height={"200px"}
              width={"330px"}
            ></img>
          </Image>
          <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod reprehenderit fuga est dicta nobis laboriosam dolorem magnam eum, porro itaque.
          </Text>
        </Content>
      </Card1>
      <Card2>
        <Content>
          <Image>
            <img
              src="https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg?size=626&ext=jpg&ga=GA1.2.50035596.1672850077&semt=sph"
              height={"200px"}
              width={"330px"}
            ></img>
          </Image>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium distinctio repellat animi nostrum eligendi laborum placeat nemo cupiditate quaerat quos?
          </Text>
        </Content>
      </Card2>

      <Card3>
        <Content>
          <Image>
            <img
              src="https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg?size=626&ext=jpg&ga=GA1.2.50035596.1672850077&semt=sph"
              height={"200px"}
              width={"330px"}
            ></img>
          </Image>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure asperiores autem quos consectetur voluptas exercitationem reprehenderit? Maiores aperiam necessitatibus facilis.
          </Text>
        </Content>
      </Card3>
    </Container>
  );
}

export default Cards