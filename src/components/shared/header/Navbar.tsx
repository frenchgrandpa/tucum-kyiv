import {FC} from "react";
import styled from "@emotion/styled";
import NavItems from "@s/header/NavItems";
import HideOnMobile from "@s/layout/HideOnMobile";


interface Props {

}


const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 32px;
  height: fit-content;

  @media (min-width: 1024px) {
    margin-top: 72px;
  }
`;

const Navbar: FC<Props> = () => {
    return (
        <HideOnMobile>
            <Container>
                <NavItems/>
            </Container>
        </HideOnMobile>
    );
};

export default Navbar;
