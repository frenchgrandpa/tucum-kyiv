import {FC} from "react";
import styled from "@emotion/styled";
import SectionTitle from "@s/section/SectionTitle";
import SectionText from "@s/section/SectionText";
import suitable from "@i/about/suitable.jpg";
import {useTranslations} from "next-intl";
import Image from "next/image";


interface Props {

}


const ImageWrapper = styled.div`
  margin: 24px 0;
`;

const Suitable: FC<Props> = () => {
    const t = useTranslations("about.suitable");
    return (
        <div>
            <SectionTitle>
                {t("title")}
            </SectionTitle>
            <SectionText>
                {t("text")}
            </SectionText>
            <ImageWrapper>
                <Image
                    alt={"Video"}
                    src={suitable}
                />
            </ImageWrapper>
        </div>
    );
};

export default Suitable;
