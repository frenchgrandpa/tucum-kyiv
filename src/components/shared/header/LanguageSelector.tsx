import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import {useTranslations} from "next-intl";
import {NavItem} from "@s/header/NavItems";


interface Props {

}


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

const Selector = styled(NavItem)`
  margin-right: 16px;
  @media (min-width: 1024px) {
    margin-right: 64px;
  }
`;

const LanguageSelector: FC<Props> = () => {
    const t = useTranslations("shared.lang");
    return (
        <LanguageWrapper>
            <Selector>
                {t("en")}
            </Selector>
        </LanguageWrapper>
    );
};

export default LanguageSelector;
