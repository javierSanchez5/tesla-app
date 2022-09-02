import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const CarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  background-color: orange;
  background-image: url("/images/model-3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Title = styled.div`
  padding-top: 200px;
  font-size: 1.2rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 100px;
  opacity: 0.7;
  text-transform: uppercase;
  width: 600px;

  .left-button {
    background-color: black;
    color: white;
  }

  .right-button {
    background-color: white;
    color: black;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .right-button {
      margin-top: 20px;
    }
  }
`;

const Button = styled.div`
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  height: 40px;
  width: 290px;
  cursor: pointer;
`;

const Arrow = styled.img`
  margin-bottom: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`

const DownSection = styled.div`
`



function Cars() {
  return (
    <CarItem>
      <Fade bottom>
        <Title>
        <h1>Model 3</h1>
        <p>
          Order Online for <u>Touchless Delivery</u>
        </p>
      </Title>
      <DownSection>
        <Buttons>
          <Button className="left-button">custom order</Button>
          <Button className="right-button">existing inventory</Button>
        </Buttons>
        <Arrow src="/images/down-arrow.svg" />
      </DownSection>
      </Fade>
      
    </CarItem>
  );
}

export default Cars;
