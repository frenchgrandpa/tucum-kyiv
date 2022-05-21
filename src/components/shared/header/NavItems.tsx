import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import {useTranslations} from "next-intl";


interface Props {

}


export const NavItem = styled.div<{ active?: boolean; }>`
  font-size: 24px;
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

const NavItems: FC<Props> = () => {
    const t = useTranslations("shared.nav");
    return (
        <>
            <NavItem active>
                {t("home")}
            </NavItem>
            <NavItem>
                {t("about")}
            </NavItem>
            <NavItem>
                {t("classes")}
            </NavItem>
            <NavItem>
                {t("contact")}
            </NavItem>
        </>
    );
};

export default NavItems;
