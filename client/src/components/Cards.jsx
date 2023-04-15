import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 600px;
  /* background-color: #d0ba2c; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  margin: 0 16px;
  padding: 24px;
  max-width: 300px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  &:hover {
    background-color: #d0ba2c;
    transform: scale(1.10);
  }
`;
const CardImg = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;
const CardContent = styled.div`
  /* Add your card description styles here */
  margin-top: 8px;
  font-size: 16px;
  color: #777;
  ${CardWrapper}:hover & {
    color: #fff;
  }
`;










function Cards() {
  
  return (
    <Container>
      <CardWrapper>
        <CardImg src="https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg?size=626&ext=jpg&ga=GA1.2.50035596.1672850077&semt=sph" />
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id
          perferendis velit illum, nesciunt eligendi obcaecati doloremque
          molestias dolore minus,nesciunt eligendi obcaecati doloremque
          molestias dolore minus.
        </CardContent>
      </CardWrapper>

      <CardWrapper>
        <CardImg
          src="https://media.istockphoto.com/id/1308965128/photo/a-beautiful-green-wheat-field-grows-during-a-sunny-day.jpg?b=1&s=170667a&w=0&k=20&c=suE6fKlc7C8f8_f307sjUtAiSbPWgHWz-RUm5MmuTaI="
          alt="card1"
        />
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id
          perferendis velit illum, nesciunt eligendi obcaecati doloremque
          molestias dolore minus,nesciunt eligendi obcaecati doloremque
          molestias dolore minus.
        </CardContent>
      </CardWrapper>

      <CardWrapper>
        <CardImg
          src="https://www.ars.usda.gov/ARSUserFiles/oc/graphics/photos/k4418-6i.jpg"
          alt="card1"
        />
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id
          perferendis velit illum, nesciunt eligendi obcaecati doloremque
          molestias dolore minus,nesciunt eligendi obcaecati doloremque
          molestias dolore minus.
        </CardContent>
      </CardWrapper>

      {/* <Card1>
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
      </Card3> */}
    </Container>
  );
}

export default Cards