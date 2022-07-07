import {FC} from "react";
import styled from "@emotion/styled";
import SectionTitle from "@s/section/SectionTitle";
import {useTranslations} from "next-intl";


interface Props {

}


const Directions = styled.div`
  margin-top: 48px;
  font-family: var(--slim-font);
`;

const Location: FC<Props> = () => {
    const t = useTranslations("contact");
    return (
        <div style={{width: "100%"}}>
            <SectionTitle>
                {t("find")}
            </SectionTitle>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13759.1503470886!2d30.472510736368548!3d50.460023284401615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce7b87732ccf%3A0x559fed83f5831246!2sKopernyka%20St%2C%203%2C%20Kyiv%2C%20Oekra%C3%AFne%2C%2002000!5e0!3m2!1snl!2shu!4v1657199777952!5m2!1snl!2shu"
                width="100%" height="750" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
            <Directions>
                <strong>{t("directions.1")}</strong><br/>
                {t("directions.2")}<br/>
                {t("directions.3")}
            </Directions>
        </div>
    );
};

export default Location;
