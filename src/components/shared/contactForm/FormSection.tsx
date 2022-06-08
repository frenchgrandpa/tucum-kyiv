import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import {Spacer} from "@s/layout/Spacer";
import Content from "@s/layout/Content";
import ContactForm from "@s/contactForm/ContactForm";


interface Props {

}


const FormSection: FC<Props> = () => {
    return (
        <>
            <Spacer/>
            <Content>
                <ContactForm/>
            </Content>
            <Spacer/>
        </>
    );
};

export default FormSection;
