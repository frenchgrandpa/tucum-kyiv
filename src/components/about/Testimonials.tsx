import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import {useTranslations} from "next-intl";
import SectionTitle from "@s/section/SectionTitle";
import SectionText from "@s/section/SectionText";
import Image from "next/image";

import t1 from "@i/about/testomonials/testimonial1.jpg";
import t2 from "@i/about/testomonials/testimonial2.jpg";
import t3 from "@i/about/testomonials/testimonial3.jpg";


interface Props {

}


const Container = styled.div`
  width: 100%;
`;


const Divider = styled.div`
  width: 100%;
  mix-blend-mode: normal;
  opacity: 0.4;
  border: .5px solid #6a8595;
  margin-top: 36px;
  margin-bottom: 72px;
`;


const TestimonialContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Testimonial = styled.div`
  min-width: 250px;
  position: relative;
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const TestimonialBox = styled.div`
  padding: 8px;
  text-align: center;
  position: absolute;
  z-index: 2;
  width: 90%;
  left: 5%;
  bottom: 5%;
  background: rgba(0, 0, 0, 0.7);
`;

const TestimonialText = styled.div`
  font-family: var(--slim-font);
`;

const TestimonialName = styled.div`
  margin-top: 16px;

  :before {
    content: "~ ";
    color: var(--accent-color);
  }
`;



const Testimonials: FC<Props> = () => {
    const t = useTranslations("about.testimonials");
    return (
        <Container>
            <SectionTitle>
                {t("title")}
            </SectionTitle>
            <Divider/>
            <TestimonialContainer>
                <Testimonial>
                    <TestimonialBox>
                        <TestimonialText>
                            {t("t1.text")}
                        </TestimonialText>
                        <TestimonialName>
                            {t("t1.name")}
                        </TestimonialName>
                    </TestimonialBox>
                    <Image
                        alt={"t1"}
                        src={t1}
                    />
                </Testimonial>
                <Testimonial>
                    <TestimonialBox>
                        <TestimonialText>
                            {t("t2.text")}
                        </TestimonialText>
                        <TestimonialName>
                            {t("t2.name")}
                        </TestimonialName>
                    </TestimonialBox>
                    <Image
                        alt={"t2"}
                        src={t2}
                    />
                </Testimonial>
                <Testimonial>
                    <TestimonialBox>
                        <TestimonialText>
                            {t("t3.text")}
                        </TestimonialText>
                        <TestimonialName>
                            {t("t3.name")}
                        </TestimonialName>
                    </TestimonialBox>
                    <Image
                        alt={"t3"}
                        src={t3}
                    />
                </Testimonial>
            </TestimonialContainer>
        </Container>
    );
};

export default Testimonials;
