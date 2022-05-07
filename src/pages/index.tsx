import {FC} from "react";
import {GetServerSidePropsContext} from "next";
import styled from "@emotion/styled";
import Logo from "@c/logo";
import Hero from "@c/Hero";


interface Props {

}


const Page = styled.div`
`;

const Header = styled.div`
  padding: 0 36px;
  display: flex;
  justify-content: center;
`;

const Navbar = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 32px;
  height: fit-content;
`;

const NavItem = styled.div<{ active?: boolean; }>`
  font-size: 18px;
  padding: 1em;
  line-height: 22px;
  text-decoration-line: ${p => p.active ? "underline" : ""};
  color: ${p => p.active ? "#FBD784" : "white"};
  cursor: pointer;

  :hover {
    color: #FBD784;
    text-decoration-line: underline;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const LanguageWrapper = styled.div`
  margin-top: 40px;
  height: fit-content;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
const ContentBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  background-size: cover;
  z-index: -1;
  background-image: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%), url("${require("@i/bg.jpg").default.src}");
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 1500px;
`;

const Index: FC<Props> = () => {
    return (
        <Page>
            <Background/>
            <Header>
                <LogoWrapper>
                    <Logo/>
                </LogoWrapper>
                <Navbar>
                    <NavItem active>
                        Home
                    </NavItem>
                    <NavItem>
                        About
                    </NavItem>
                    <NavItem>
                        Classes
                    </NavItem>
                    <NavItem>
                        Contact
                    </NavItem>
                </Navbar>
                <LanguageWrapper>
                    <NavItem style={{marginRight: "64px"}}>
                        EN
                    </NavItem>
                </LanguageWrapper>
            </Header>
            <ContentBox>
                <Content>
                    <Hero/>
                </Content>
            </ContentBox>
        </Page>
    );
};

export default Index;



export async function getServerSideProps({locale}: GetServerSidePropsContext) {
    return {
        props: {
            locales: {
                ...await import(`@l/shared/${locale}.json`)
            }
        }
    };
}
