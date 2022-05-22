import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {ABOUT, CLASSES, CONTACT, HOME} from "../../../Pages";
import {useRouter} from "next/router";


interface Props {

}


export const NavItem = styled.a<{ active?: boolean; }>`
  display: block;
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
    const {pathname} = useRouter();
    return (
        <>
            <Link href={HOME}>
                <NavItem active={pathname === HOME}>
                    {t("home")}
                </NavItem>
            </Link>
            <Link href={ABOUT}>
                <NavItem active={pathname === ABOUT}>
                    {t("about")}
                </NavItem>
            </Link>
            <Link href={CLASSES}>
                <NavItem active={pathname === CLASSES}>
                    {t("classes")}
                </NavItem>
            </Link>
            <Link href={CONTACT}>
                <NavItem active={pathname === CONTACT}>
                    {t("contact")}
                </NavItem>
            </Link>
        </>
    );
};

export default NavItems;
