import styled from "@emotion/styled";
import {FC} from "react";
import {FaArrowDown} from "react-icons/fa";
import PreTitle from "@s/PreTitle";
import {useTranslations} from "next-intl";


interface Props {

}


const Container = styled.div`
  margin-top: 100px;
  width: 950px;
`;

const Title = styled.div`
  font-family: var(--title-font);
  font-weight: 300;
  font-size: min(10vw, 88px);
  line-height: 1.14;
  margin: 32px 0;
`;

const SignUp = styled.div`
`;

const Hero: FC<Props> = () => {
    const t = useTranslations("shared.hero");
    return (
        <Container>
            <PreTitle>
                {t("preTitle")}
            </PreTitle>
            <Title>
                {t("title")}

            </Title>
            <SignUp>
                {t("signUp")}
                <FaArrowDown style={{marginLeft: "4px", marginTop: "2px", marginBottom: "-2px"}}/>
            </SignUp>
        </Container>
    );
};

export default Hero;
