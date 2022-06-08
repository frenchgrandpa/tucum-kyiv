import {FC} from "react";
import {useTranslations} from "next-intl";
import {GetServerSidePropsContext} from "next";
import PageLayout from "@c/shared/layout/PageLayout";
import Content from "@c/shared/layout/Content";
import Schedule from "@c/classes/Schedule";
import {Spacer} from "@s/layout/Spacer";
import Faq from "@c/classes/Faq";
import ContactForm from "@s/contactForm/ContactForm";
import FormSection from "@s/contactForm/FormSection";


interface Props {

}



const Classes: FC<Props> = () => {

    return (
        <PageLayout>
            <Content>
                <Schedule/>
            </Content>
            <Spacer/>
            <Content>
                <Faq/>
            </Content>
            <FormSection/>
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
