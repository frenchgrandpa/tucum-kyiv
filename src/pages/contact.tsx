import {FC} from "react";
import {GetServerSidePropsContext} from "next";
import PageLayout from "@c/shared/layout/PageLayout";
import Content from "@c/shared/layout/Content";
import {Spacer} from "@s/layout/Spacer";
import FormSection from "@s/contactForm/FormSection";
import Location from "@c/contact/Location";
import Trainers from "@c/contact/Trainers";


interface Props {

}


const Contact: FC<Props> = () => {
    return (
        <PageLayout>
            <Content>
                <Trainers/>
            </Content>
            <Spacer/>
            <Content>
                <Location/>
            </Content>
            <FormSection/>
        </PageLayout>
    );
};

export default Contact;



export async function getServerSideProps({locale}: GetServerSidePropsContext) {
    return {
        props: {
            locales: {
                ...await import(`@l/shared/${locale}.json`),
                ...await import(`@l/contact/${locale}.json`)
            }
        }
    };
}
