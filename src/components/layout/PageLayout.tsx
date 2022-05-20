import {FC} from "react";
import styled from "@emotion/styled";
import Logo from "@c/logo";
import Hero from "@c/Hero";
import Main from "@c/layout/Main";
import Content from "@c/layout/Content";


interface Props {

}


const Page = styled.div`
`;

const Header = styled.div`
  padding: 0 0;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 0 36px;
  }
`;

const Navbar = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 32px;
  height: fit-content;

  @media (min-width: 1024px) {
    margin-top: 72px;
  }
`;

const NavItem = styled.div<{ active?: boolean; }>`
  font-size: 18px;
  padding: 1em;
  line-height: 1.22;
  text-decoration-line: ${p => p.active ? "underline" : ""};
  color: ${p => p.active ? "var(--accent-color)" : undefined};
  cursor: pointer;

  :hover {
    color: var(--accent-color);
    text-decoration-line: underline;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const LanguageWrapper = styled.div`
  margin-top: 20px;
  height: fit-content;
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (min-width: 1024px) {
    margin-top: 72px;
  }
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
        <Page>
            <Background>
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
                <Content>
                    <Hero/>
                </Content>
            </Background>
            <Main>
                {children}
            </Main>
        </Page>
    );
};

export default PageLayout;
