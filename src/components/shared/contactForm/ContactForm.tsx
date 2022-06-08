import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import SectionTitle from "@s/section/SectionTitle";
import FaqItem from "@c/classes/FaqItem";
import {useTranslations} from "next-intl";
import FormInput, {Label} from "@s/contactForm/FormInput";
import axios from "axios";


interface Props {

}


const FormContainer = styled.form`
  margin-top: 64px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px 100px;
  width: 100%;
  padding: 0 16px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }
`;

const Submit = styled.button`
  background: none;
  color: inherit;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border: 1px solid #FBD784;
  width: 236px;
  font-size: 32px;
  display: block;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Radio = styled.input`
  margin-left: 24px;
`;

const ContactForm: FC<Props> = () => {
    const t = useTranslations("shared.contact");
    return (
        <div style={{width: "100%"}}>
            <SectionTitle>
                {t("title")}
            </SectionTitle>
            <FormContainer action="https://submit-form.com/5nxH1Jkb">
                <FormInput name={"firstName"} label={t("firstName.label")} placeholder={t("firstName.placeholder")}/>
                <FormInput name={"lastName"} label={t("lastName.label")} placeholder={t("lastName.placeholder")}/>
                <FormInput name={"email"} label={t("email.label")} placeholder={t("email.placeholder")} type={"email"}/>
                <FormInput name={"phone"} label={t("phone.label")} placeholder={t("phone.placeholder")} type={"phone"}/>
                <div>
                    <Label>
                        {t("experience.title")}
                    </Label>
                    <Radio type={"radio"} name={"experience"} value={"new"} id={"exp-new"} required
                           style={{marginLeft: 32}}/>
                    <label htmlFor="exp-new">{t("experience.new")}</label>
                    <Radio type={"radio"} name={"experience"} value={"1-3"} id={"exp-1-3"} required/>
                    <label htmlFor="exp-1-3">{"1-3 "}{t("experience.years")}</label>
                    <Radio type={"radio"} name={"experience"} value={"3-5"} id={"exp-3-5"} required/>
                    <label htmlFor="exp-3-5">{"3-5 "}{t("experience.years")}</label>
                    <Radio type={"radio"} name={"experience"} value={"5"} id={"exp-5"} required/>
                    <label htmlFor="exp-5">{"5+ "}{t("experience.years")}</label>
                </div>
                <ButtonWrapper>
                    <Submit type={"submit"}>
                        {t("submit")}
                    </Submit>
                </ButtonWrapper>
            </FormContainer>

        </div>
    );
};

export default ContactForm;
