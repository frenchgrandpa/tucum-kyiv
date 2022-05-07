import styled from "@emotion/styled";
import {FC, useEffect, useState} from "react";
import {FaArrowDown} from "react-icons/fa";


interface Props {

}


const Container = styled.div`
  margin-top: 150px;
  width: 950px;
`;

const SmallTextContainer = styled.div`
  display: flex;
`;
const SmallTextLine = styled.div`
  margin: 10px 32px 10px 0px;
  width: 72px;
  height: 2px;
  background: #FBD784;
`;

const SmallText = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: 6px;
  text-transform: uppercase;

  color: #FBD784;
`;

const Title = styled.div`
  font-family: 'Chronicle Display', serif;
  font-style: normal;
  font-weight: 300;
  font-size: 88px;
  line-height: 100px;
  color: white;
  margin: 32px 0;
`;

const SignUp = styled.div`
  color: white;
`;

const Hero: FC<Props> = () => {
    return (
        <Container>
            <SmallTextContainer>
                <SmallTextLine/>
                <SmallText>
                    CAPOEIRA UKRAINE
                </SmallText>
            </SmallTextContainer>
            <Title>
                Sign Up for Capoeira Classes in Kyiv
            </Title>
            <SignUp>
                sign up now
                <FaArrowDown style={{marginLeft: "4px", marginTop: "2px", marginBottom: "-2px"}}/>
            </SignUp>
        </Container>
    );
};

export default Hero;
