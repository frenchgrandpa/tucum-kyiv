import {FC} from "react";
import {useTranslations} from "next-intl";
import {GetServerSidePropsContext} from "next";
import PageLayout from "@c/shared/layout/PageLayout";
import Section from "@c/index/Section";
import Content from "@c/shared/layout/Content";


import section1 from "@i/index/section1.jpg";
import section2 from "@i/index/section2.jpg";
import section3 from "@i/index/section3.jpg";
import styled from "@emotion/styled";


interface Props {

}

const Spacer = styled.div`
  @media (min-width: 656px) {
    height: min(10vw, 200px);
  }
`;


const Index: FC<Props> = () => {
    const t = useTranslations("index");

    return (
        <PageLayout>
            <Content>
                <Section
                    number={"01"}
                    preTitle={t("about.preTitle")}
                    title={t("about.title")}
                    text={t("about.text")}
                    image={section1}
                />
            </Content>
            <Spacer/>
            <Content>
                <Section
                    flip
                    number={"02"}
                    preTitle={t("classes.preTitle")}
                    title={t("classes.title")}
                    text={t("classes.text")}
                    image={section2}
                />
            </Content>
            <Spacer/>
            <Content>
                <Section
                    number={"03"}
                    preTitle={t("contact.preTitle")}
                    title={t("contact.title")}
                    text={t("contact.text")}
                    image={section3}
                />
            </Content>
        </PageLayout>
    );
};

export default Index;



export async function getServerSideProps({locale}: GetServerSidePropsContext) {
    return {
        props: {
            locales: {
                ...await import(`@l/shared/${locale}.json`),
                ...await import(`@l/index/${locale}.json`)
            }
        }
    };
}
