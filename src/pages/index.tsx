import {FC} from "react";
import {useTranslations} from "next-intl";
import {GetServerSidePropsContext} from "next";
import PageLayout from "@c/layout/PageLayout";
import Section from "@c/index/Section";
import Content from "@c/layout/Content";


import section1 from "@i/index/section1.jpg";
import section2 from "@i/index/section2.jpg";
import section3 from "@i/index/section3.jpg";


interface Props {

}


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
            <div style={{height: "300px"}}/>
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
            <div style={{height: "300px"}}/>
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
