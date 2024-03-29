import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from '../data';
import image2 from "./image2.jpg"

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
  overflow: hidden;
 
    
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  //-100 vw means the shifting towards the -x axis
  transform: translate(${(props) => props.slideIndex * -100}vw);

  background-image: url(${image2});
  
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

  
  
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 85%;
  width: 100%;
  /* object-fit: cover; */
`;

const InfoContainer = styled.div`
  flex: 1;
  
`;

const Title = styled.h1`
  font-size: 70px;
  
  /* font-weight:800px; */
`;

const Desc = styled.p`
  margin: 50px 10px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  border-radius:5px;
  margin-left:10px;
  
  background-color: transparent;
  &:hover {
    background-color: #d0ba2c;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>

            <InfoContainer>
              <Title> {item.title}</Title>
              {/* <Desc>{item.desc}</Desc> */}
              <Button>DISCOVER MORE</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
