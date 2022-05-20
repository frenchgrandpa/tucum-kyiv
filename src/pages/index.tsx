import {FC} from "react";
import {useTranslations} from "next-intl";
import {GetServerSidePropsContext} from "next";
import PageLayout from "@c/layout/PageLayout";
import ContentBox from "@c/layout/ContentBox";
import Content from "@c/layout/Content";
import Section from "@c/index/Section";


interface Props {

}


const Index: FC<Props> = () => {
    const t = useTranslations("index");

    return (
        <PageLayout>
            <ContentBox>
                <Content>
                    <Section
                        number={"01"}
                        preTitle={t("about.preTitle")}
                        title={t("about.title")}
                        text={t("about.text")}
                    />
                </Content>
            </ContentBox>
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
