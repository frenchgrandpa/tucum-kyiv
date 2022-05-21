import {FC} from "react";
import styled from "@emotion/styled";
import Hero from "@s/Hero";
import Main from "@s/layout/Main";
import Content from "@s/layout/Content";
import Header from "@s/header/Header";
import MobileMenu from "../MobileMenu";
import MobileMenuContextProvider from "@s/MobileMenuContextProvider";


interface Props {

}


const Page = styled.div`
`;

const Background = styled.div`
  background-size: cover;
  background-image: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%), url("${require("@i/bg.jpg").default.src}");
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 1500px;
`;

const PageLayout: FC<Props> = ({children}) => {
    return (
        <MobileMenuContextProvider>
            <Page>
                <Background>
                    <Header/>
                    <Content>
                        <Hero/>
                    </Content>
                </Background>
                <Main>
                    {children}
                </Main>
            </Page>
        </MobileMenuContextProvider>
    );
};

export default PageLayout;
