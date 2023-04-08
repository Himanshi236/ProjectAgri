import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2016/01/02/00/40/green-1117267__340.jpg");
  


  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  height:70%;
  width: 55%;
  justify-content: center;
  align-items: center;
  
  background-color: white;
`;

const Image = styled.img`
  flex: 1;
  height:68%;
  width:20%;
  
  object-fit:cover;
  
`;

const Text=styled.div`
  flex:1;
  background-color:white;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:20px;
`;

const FormData=styled.input`
  margin: 20px;

`
const Button=styled.button`
  background-color: #0a5a0a;
  color: white;
  border: none;
  border-radius: 10px;
  padding:10px;

  
`
const TextArea = styled.textarea`
  margin-bottom: 10px;
  
  
`;

function Contact() {
  return (
    <Container>
      <Wrapper>
        <Image
          src="https://img.freepik.com/free-vector/contact-concept-landing-page_52683-21523.jpg?size=626&ext=jpg&ga=GA1.2.50035596.1672850077&semt=robertav1_2_sidr"
          alt="img"
        ></Image>

        <Text>
          <Form>
            <FormData
              type="text"
              placeholder="Enter your name"
              name="name"
            ></FormData>

            <FormData
              type="text"
              placeholder="Enter your email"
              name="email"
            ></FormData>

            <TextArea
              type="text"
              placeholder="Enter your message"
              name="email"
            ></TextArea>

            <Button>Submit</Button>
          </Form>
        </Text>
      </Wrapper>
    </Container>
  );
  
}

export default Contact