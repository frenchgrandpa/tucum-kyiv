import {FC} from "react";
import styled from "@emotion/styled";
import Logo from "@s/header/logo";
import Navbar from "@s/header/Navbar";
import LanguageSelector from "@s/header/LanguageSelector";
import MobileMenuButton from "@s/header/MobileMenuButton";
import MobileMenu from "@s/MobileMenu";


interface Props {

}


const Container = styled.div`
  position: relative;
  padding: 0 0;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 0 36px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const Header: FC<Props> = () => {

    return (
        <Container>
            <LogoWrapper>
                <Logo/>
            </LogoWrapper>
            <Navbar/>
            <LanguageSelector/>
            <MobileMenuButton/>
            <MobileMenu/>
        </Container>
    );
};

export default Header;
