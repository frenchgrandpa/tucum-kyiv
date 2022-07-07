import {FC} from "react";
import styled from "@emotion/styled";
import Content from "@s/layout/Content";
import FooterItem from "@s/footer/FooterItem";
import {useTranslations} from "next-intl";
import Link from "next/link";
import FbLink from "@s/footer/FbLink";


interface Props {

}


const Background = styled.div`
  width: 100%;
  background: #23343C;
`;

const Container = styled.div`
  margin: 75px 0;
  width: 100%;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  text-align: center;

  @media (min-width: 500px) {
    text-align: left;
    grid-template-columns: 0.7fr 1.3fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const PageLink = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: white;
  font-family: var(--slim-font);
  cursor: pointer;

  :hover {
    text-decoration-line: underline;
  }
`;

const Address = styled.div`
  font-size: 24px;
  text-decoration: none;
  color: white;
  font-family: var(--slim-font);
  margin-bottom: 28px;
`;

const Footer: FC<Props> = () => {
    const t = useTranslations("shared.footer");
    const n = useTranslations("shared.nav");
    return (
        <Background>
            <Content>
                <Container>
                    <FooterItem title={t("menu")}>
                        <Link href={"/"}><PageLink>{"> "}{n("home")}</PageLink></Link><br/>
                        <Link href={"/about"}><PageLink>{"> "}{n("about")}</PageLink></Link><br/>
                        <Link href={"/classes"}><PageLink>{"> "}{n("classes")}</PageLink></Link><br/>
                        <Link href={"/contact"}><PageLink>{"> "}{n("contact")}</PageLink></Link>
                    </FooterItem>
                    <FooterItem title={t("address")}>
                        <Address>
                            Kopernyka St. 3,<br/>
                            Kyiv, Ukraine, <br/>
                            04116
                        </Address>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13759.1503470886!2d30.472510736368548!3d50.460023284401615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce7b87732ccf%3A0x559fed83f5831246!2sKopernyka%20St%2C%203%2C%20Kyiv%2C%20Oekra%C3%AFne%2C%2002000!5e0!3m2!1snl!2shu!4v1657199777952!5m2!1snl!2shu"
                            width="80%" height="250" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </FooterItem>
                    <FooterItem title={t("follow")}>
                        <FbLink/>
                    </FooterItem>
                </Container>
            </Content>
        </Background>

    );
};

export default Footer;
