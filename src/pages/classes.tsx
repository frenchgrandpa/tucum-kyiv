import {FC} from "react";
import {useTranslations} from "next-intl";
import {GetServerSidePropsContext} from "next";
import PageLayout from "@c/shared/layout/PageLayout";
import Content from "@c/shared/layout/Content";
import Schedule from "@c/classes/Schedule";


interface Props {

}



const Classes: FC<Props> = () => {
    const t = useTranslations("classes");

    return (
        <PageLayout>
            <Content>
                <Schedule/>
            </Content>
        </PageLayout>
    );
};

export default Classes;



export async function getServerSideProps({locale}: GetServerSidePropsContext) {
    return {
        props: {
            locales: {
                ...await import(`@l/shared/${locale}.json`),
                ...await import(`@l/classes/${locale}.json`)
            }
        }
    };
}
