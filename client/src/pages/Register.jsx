import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://cdn.pixabay.com/photo/2022/05/05/23/12/agriculture-7177221_960_720.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #5d9c59;
  color: white;
  cursor: pointer;
`;


function Register() {
  const [userRegistration,setUserRegistration]=useState({
    name:"",
    lastname:"",
    email:"",
    username:"",
    password:"",
    confirmpassword:"",

  })

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    // [name] :square brackets means adding dynamic data
    setUserRegistration({...userRegistration,[name]:value})
    
    
  }
  const handleSubmit=(e)=>{
      alert("Submitted")
  }
  
  const PostData=async(e)=>{
    const navigate = useNavigate();
      e.preventDefault();
      const {name,lastname,email,username,password,confirmpassword}=userRegistration
      const res=await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // always send data in string format on server
        body: JSON.stringify({
          name,
          lastname,
          email,
          username,
          password,
          confirmpassword,
        })
        
      });
      
      const data=await res.json();
      
      if(!data){
        window.alert("Invalid Registration")
      }else{
        window.alert("Registration Successful")
        
        navigate("/login");
      }
      

      
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={PostData} method="POST">
          <Input
            placeholder="name"
            name="name"
            value={userRegistration.name}
            onChange={handleInput}
          />
          <Input
            placeholder="last name"
            name="lastname"
            value={userRegistration.lastname}
            onChange={handleInput}
          />

          <Input
            placeholder="email"
            name="email"
            value={userRegistration.email}
            onChange={handleInput}
          />
          <Input
            placeholder="username"
            name="username"
            value={userRegistration.username}
            onChange={handleInput}
          />
          <Input
            placeholder="password"
            name="password"
            value={userRegistration.password}
            onChange={handleInput}
          />
          <Input
            placeholder="confirm password"
            name="confirmpassword"
            value={userRegistration.confirmpassword}
            onChange={handleInput}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button onClick={PostData}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register