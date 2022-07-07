import {FC, useState, useEffect, createContext, useContext} from "react";
import styled from "@emotion/styled";
import {MobileMenuContext} from "@s/MobileMenuContextProvider";
import {useTranslations} from "next-intl";
import NavItems from "@s/header/NavItems";


interface Props {

}


const Container = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  top: 100%;
  direction: rtl;
`;

const MobileMenu: FC<Props> = () => {
    const {show} = useContext(MobileMenuContext);

    if (!show) {
        return null;
    }

    return (
        <Container>
            <NavItems/>
        </Container>

    );
};

export default MobileMenu;
