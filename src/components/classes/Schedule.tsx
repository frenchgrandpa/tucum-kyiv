import {FC} from "react";
import styled from "@emotion/styled";
import SectionTitle from "@s/section/SectionTitle";
import { useTranslations } from "next-intl";
import Day from "@c/classes/Day";


interface Props {

}

const DayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
  width: 100%;
  justify-content: center;
`;

const Schedule: FC<Props> = () => {
    const t = useTranslations("classes.schedule");
    return (
        <div style={{width: "100%"}}>
            <SectionTitle>
                {t("title")}
            </SectionTitle>
            <DayContainer>
                <Day day={1}/>
                <Day day={2}/>
                <Day day={3}/>
                <Day day={4}/>
                <Day day={5}/>
                <Day day={6}/>
            </DayContainer>
        </div>
    );
};

export default Schedule;
