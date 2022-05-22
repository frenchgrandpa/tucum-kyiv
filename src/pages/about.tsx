import {FC} from "react";
import {useTranslations} from "next-intl";
import {GetServerSidePropsContext} from "next";
import PageLayout from "@c/shared/layout/PageLayout";
import Section from "@s/section/Section";
import Content from "@c/shared/layout/Content";
import styled from "@emotion/styled";
import SectionTitle from "@s/section/SectionTitle";
import SectionText from "@s/section/SectionText";
import Image from "next/image";

import what from "@i/about/what.png";
import team from "@i/about/team.png";
import suitable from "@i/about/suitable.jpg";
import Suitable from "@c/about/Suitable";
import Testimonials from "@c/about/Testimonials";


interface Props {

}


const Spacer = styled.div`
  @media (min-width: 656px) {
    height: min(10vw, 200px);
  }
`;



const About: FC<Props> = () => {
    const t = useTranslations("about");

    return (
        <PageLayout>
            <Content>
                <Section flip image={what} noPadding>
                    <SectionTitle>
                        {t("what.title")}
                    </SectionTitle>
                    <SectionText>
                        {t("what.text")}
                    </SectionText>
                </Section>
            </Content>
            <Spacer/>
            <Content>
                <Section image={team} noPadding>
                    <SectionTitle>
                        {t("team.title")}
                    </SectionTitle>
                    <SectionText>
                        {t.rich("team.text", {p: (c) => <p>{c}</p>})}
                    </SectionText>
                </Section>
            </Content>
            <Spacer/>
            <Content>
                <Suitable/>
            </Content>
            <Content>
                <Testimonials/>
            </Content>
        </PageLayout>
    );
};

export default About;



export async function getServerSideProps({locale}: GetServerSidePropsContext) {
    return {
        props: {
            locales: {
                ...await import(`@l/shared/${locale}.json`),
                ...await import(`@l/about/${locale}.json`)
            }
        }
    };
}
