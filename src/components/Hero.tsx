import styled from "@emotion/styled";
import {FC, useEffect, useState} from "react";
import {FaArrowDown} from "react-icons/fa";
import PreTitle from "@c/PreTitle";


interface Props {

}


const Container = styled.div`
  margin-top: 100px;
  width: 950px;
`;



const Title = styled.div`
  font-family: var(--title-font);
  font-weight: 300;
  font-size: min(10vw, 88px);
  line-height: 1.14;
  margin: 32px 0;
`;

const SignUp = styled.div`
`;

const Hero: FC<Props> = () => {
    return (
        <Container>
            <PreTitle>
                Capoeira Ukraine
            </PreTitle>
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
