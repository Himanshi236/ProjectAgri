import React from "react";
import styled from "styled-components";
import image from "./image.jpg"

// Styled Components
const AboutUsWrapper = styled.div`
  display: flex;

  align-items: center;
  padding: 2rem;
  justify-content: space-evenly;
  background-image: url(${image});
  object-fit: contain;
  background-size: cover;

  /* background: url("https://media.istockphoto.com/id/1308965128/photo/a-beautiful-green-wheat-field-grows-during-a-sunny-day.jpg?b=1&s=170667a&w=0&k=20&c=suE6fKlc7C8f8_f307sjUtAiSbPWgHWz-RUm5MmuTaI=") */

  /* &:hover {
    background-color: #d0ba2c;
  } */
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
  max-width: 800px;
  ${AboutUsWrapper}:hover &{
    color:white;
   
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
  transition: 1.5s ease-in-out;
  ${AboutUsWrapper}:hover & {
    transform: scale(1.06);
  }
  /* &:hover{
    transform:scale(1.1);
  } */
`;

const AboutUs = () => {
  return (
    <>
      <Heading>About Us</Heading>
      <AboutUsWrapper>
        <Image
          src="https://media.istockphoto.com/id/1322823038/photo/agriculture.jpg?b=1&s=170667a&w=0&k=20&c=0JvHM76O7xCZ-8d0o9Nq9bWt2Pir3PAv-7qCiirp4rg="
          alt="About Us"
        />
        <Paragraph>
          Farm Fresh is a family-owned and operated farm that has been providing
          fresh and sustainable agriculture for over 30 years. We are committed
          to growing high-quality produce using eco-friendly and sustainable
          farming practices. Our mission is to provide our customers with the
          freshest and most delicious fruits and vegetables while promoting
          healthy eating habits and supporting local communities. We take pride
          in our farm-to-table approach, ensuring that our produce is harvested
          at its peak ripeness and delivered to our customers in the shortest
          possible time.
        </Paragraph>
      </AboutUsWrapper>
    </>
  );
};

export default AboutUs;
