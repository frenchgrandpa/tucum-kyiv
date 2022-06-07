import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import {useTranslations} from "next-intl";
import SectionTitle from "@s/section/SectionTitle";
import Day from "@c/classes/Day";
import FaqItem from "@c/classes/FaqItem";


interface Props {

}


const FaqContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  width: 100%;
  justify-content: center;
  background: #23343C80;
  padding: 16px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 64px;
  }
`;


const Faq: FC<Props> = () => {
    const t = useTranslations("classes.faq");
    return (
        <div style={{width: "100%"}}>
            <SectionTitle>
                {t("title")}
            </SectionTitle>
            <FaqContainer>
                <FaqItem title={t("1.title")} text={t("1.text")}/>
                <FaqItem title={t("2.title")} text={t("2.text")}/>
                <FaqItem title={t("3.title")} text={t("3.text")}/>
                <FaqItem title={t("4.title")} text={t("4.text")}/>
            </FaqContainer>
        </div>
    );
};

export default Faq;
