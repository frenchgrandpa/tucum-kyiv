import {FC, useState} from "react";
import styled from "@emotion/styled";
import {useTranslations} from "next-intl";
import {NavItem} from "@s/header/NavItems";
import HideOnMobile from "@s/layout/HideOnMobile";
import {useRouter} from "next/router";


interface Props {

}


const LanguageWrapper = styled(HideOnMobile)`
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

const DropdownContainer = styled.div<{ show: boolean }>`
  display: ${p => p.show ? "block" : "none"};
  position: absolute;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.5);
  top: 100%;
  right: 64px;
  direction: rtl;
  border-radius: 4px;
  padding: 8px;
`;

const Locale = styled.div`

  :hover {
    color: var(--accent-color);
    text-decoration-line: underline;
  }
`;

const LanguageSelector: FC<Props> = () => {
    const t = useTranslations("shared.lang");
    const router = useRouter();
    const {pathname, asPath, query, locale, defaultLocale, locales} = router;
    const [show, setShow] = useState<boolean>(false);

    return (
        <LanguageWrapper>
            <div style={{position: "relative"}}>
                <Selector onClick={() => setShow(s => !s)}>
                    {t(locale || defaultLocale!).substring(0, 2)}
                </Selector>
                <DropdownContainer show={show}>
                    {locales!.map(l => (
                        <Locale onClick={() => {
                            router.push({pathname, query}, asPath, {locale: l});
                            setShow(false);
                        }}>
                            {t(l)}
                        </Locale>
                    ))}
                </DropdownContainer>
            </div>
        </LanguageWrapper>
    );
};

export default LanguageSelector;
