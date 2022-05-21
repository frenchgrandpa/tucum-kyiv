import {FC} from "react";
import styled from "@emotion/styled";
import Logo from "@s/header/logo";
import {useTranslations} from "next-intl";
import NavItems from "@s/header/NavItems";


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
        <Container>
           <NavItems/>
        </Container>
    );
};

export default Navbar;
