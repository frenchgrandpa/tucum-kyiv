import {FC} from "react";
import Image, {StaticImageData} from "next/image";
import styled from "@emotion/styled";
import PreTitle from "@c/PreTitle";
import {FaArrowRight} from "react-icons/fa";
import {useTranslations} from "next-intl";


interface Props {
    flip?: boolean;
    number: string;
    preTitle: string;
    title: string;
    text: string;
    image: StaticImageData;
}


const Container = styled.div<{ direction: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 720px;
  margin-top: -48px;
  direction: ${p => p.direction};
`;

const TextContainer = styled.div`
  margin-top: 64px;
  position: relative;
  max-width: 50%;
  padding-left: 150px;
  direction: ltr;
`;

const Title = styled.div`
  font-family: var(--title-font);
  font-weight: 300;
  font-size: 64px;
  line-height: 1.2;
  margin: 28px 0;
`;

const Text = styled.div`
  font-size: 24px;
  line-height: 1.33;
`;

const Number = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  opacity: 0.1;
  font-size: 240px;
  line-height: 1;
`;

const ImageWrapper = styled.div`
  height: 720px;
`;

const ReadMore = styled.div`
  color: var(--accent-color);
  margin-top: 48px;
  font-size: 18px;
  line-height: 1.22;
`;

const Section: FC<Props> = ({flip, number, preTitle, title, text, image}) => {
    const t = useTranslations("index");
    return (
        <Container direction={flip ? "rtl" : "ltr"}>
            <TextContainer>
                <Number>
                    {number}
                </Number>
                <PreTitle>
                    {preTitle}
                </PreTitle>
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
                    src={image}
                />
            </ImageWrapper>
        </Container>
    );
};

export default Section;

