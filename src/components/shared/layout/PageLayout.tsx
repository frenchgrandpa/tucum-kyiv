import {FC} from "react";
import styled from "@emotion/styled";
import Hero from "@s/Hero";
import Main from "@s/layout/Main";
import Content from "@s/layout/Content";
import Header from "@s/header/Header";
import MobileMenuContextProvider from "@s/MobileMenuContextProvider";
import Footer from "../footer/Footer";


interface Props {

}


const Background = styled.div`
  background-size: cover;
  background-image: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%), url("${require("@i/bg.webp").default.src}");
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 70vh;
  min-height: 550px;
  max-height: 800px;
  @media (min-width: 1024px) {
    height: 80vh;
    min-height: 1000px;
    max-height: 1500px;
  }
`;

const PageLayout: FC<Props> = ({children}) => {
    return (
        <MobileMenuContextProvider>
            <div>
                <Background>
                    <Header/>
                    <Content>
                        <Hero/>
                    </Content>
                </Background>
                <Main>
                    {children}
                </Main>
                <Footer/>
            </div>
        </MobileMenuContextProvider>
    );
};

export default PageLayout;
