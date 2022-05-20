import {FC} from "react";
import Image from "next/image";
import {GetServerSidePropsContext} from "next";
import styled from "@emotion/styled";
import PageLayout from "@c/layout/PageLayout";
import ContentBox from "@c/layout/ContentBox";
import Content from "@c/layout/Content";
import PreTitle from "@c/PreTitle";
import section1 from "@i/index/section1.jpg";
import {FaArrowRight} from "react-icons/fa";
import { useTranslations } from "next-intl";


interface Props {
    number: string;
    preTitle: string;
    title: string;
    text: string;
}


const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 720px;
  margin-top: -48px;
`;

const TextContainer = styled.div`
  max-width: 50%;
  padding-left: 150px;
`;

const Title = styled.div`
  font-family: var(--title-font);
  font-weight: 300;
  font-size: 64px;
  line-height: 77px;
  margin: 28px 0;
`;

const Text = styled.div`
  font-size: 24px;
  line-height: 32px;
`;

const Number = styled.div`
  position: absolute;
  top: 32px;
  left: 0;
  opacity: 0.1;
  font-size: 240px;
  line-height: 240px;
`;

const ImageWrapper = styled.div`
  height: 720px;
`;

const PreTitleWrapper = styled.div`
  margin: 32px 0;
`;

const ReadMore = styled.div`
  color: var(--accent-color);
  margin-top: 48px;
  font-size: 18px;
  line-height: 22px;
`;

const Section: FC<Props> = ({number, preTitle, title, text}) => {
    const t = useTranslations("index");
    return (
        <Container>
            <Number>
                {number}
            </Number>
            <TextContainer>
                <PreTitleWrapper>
                    <PreTitle>
                        {preTitle}
                    </PreTitle>
                </PreTitleWrapper>
                <Title>
                    {title}
                </Title>
                <Text>
                    {text}
                </Text>
                <ReadMore>
                    {t("readMore")}
                    <FaArrowRight style={{marginLeft: "16px", marginBottom: "-3px"}}/>
                </ReadMore>
            </TextContainer>
            <ImageWrapper>
                <Image
                    alt={preTitle}
                    src={section1}
                />
            </ImageWrapper>
        </Container>
    );
};

export default Section;

