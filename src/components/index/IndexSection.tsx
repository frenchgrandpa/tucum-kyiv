import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import Section from "@s/section/Section";
import {StaticImageData} from "next/image";
import PreTitle from "@s/PreTitle";
import SectionTitle from "@s/section/SectionTitle";
import SectionText from "@s/section/SectionText";
import {useTranslations} from "next-intl";
import {FaArrowRight} from "react-icons/fa";


interface Props {
    flip?: boolean;
    number: string;
    preTitle: string;
    title: string;
    text: string;
    image: StaticImageData;
}


const Number = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  opacity: 0.1;
  font-size: 240px;
  line-height: 1;
`;
const ReadMore = styled.div`
  color: var(--accent-color);
  margin-top: 48px;
  font-size: 18px;
  line-height: 1.22;
`;

const IndexSection: FC<Props> = ({flip, number, preTitle, title, text, image}) => {
    const t = useTranslations("index");
    return (
        <Section
            flip={flip}
            image={image}
        >
            <Number>
                {number}
            </Number>
            <PreTitle>
                {preTitle}
            </PreTitle>
            <SectionTitle>
                {title}
            </SectionTitle>
            <SectionText>
                {text}
            </SectionText>
            <ReadMore>
                {t("readMore")}
                <FaArrowRight style={{marginLeft: "16px", marginBottom: "-3px"}}/>
            </ReadMore>
        </Section>
    );
};

export default IndexSection;
