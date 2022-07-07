import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import SectionTitle from "@s/section/SectionTitle";
import {useTranslations} from "next-intl";

import t1 from "@i/contact/trainer1.jpg";
import t2 from "@i/contact/trainer2.jpg";
import t3 from "@i/contact/trainer3.jpg";
import Trainer from "@c/contact/Trainer";


interface Props {

}


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 48px;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;

const Trainers: FC<Props> = () => {
    const t = useTranslations("contact");
    return (
        <div style={{width: "100%"}}>
            <SectionTitle>
                {t("title")}
            </SectionTitle>
            <Container>
                <Trainer
                    image={t1}
                    name={"Anna (Mola)"}
                    title={"CEO & head trainer of the capoeira school"}
                    phone={"(067) 128 - 134 - 345"}
                />
                <Trainer
                    image={t2}
                    name={"Dima (Morcego)"}
                    title={"Head trainer"}
                    phone={"(067) 128 - 134 - 345"}
                />
                <Trainer
                    image={t3}
                    name={"Minitor Vladislav"}
                    title={"Head trainer and trainer of children classes"}
                    phone={"(067) 128 - 134 - 345"}
                />
            </Container>
        </div>
    );
};

export default Trainers;
