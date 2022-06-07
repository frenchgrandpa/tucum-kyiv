import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import {Dayjs} from "dayjs";
import { useTranslations } from "next-intl";


interface Props {
    index: number;
    group: GroupData;
}


export type GroupData = {
    from: Dayjs,
    to: Dayjs
}



const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
`;

const Name = styled.div`
`;

const Hours = styled.div`
  font-family: var(--slim-font);
  font-variant-numeric: tabular-nums;
`;

const Group: FC<Props> = ({index, group}) => {
    const t = useTranslations("classes.schedule");
    return (
        <Container>
            <Name>
                {t("group")}
                {" "}
                {index}
            </Name>
            <Hours>
                {group.from.format("LT")}
                {" - "}
                {group.to.format("LT")}
            </Hours>
        </Container>
    );
};

export default Group;
