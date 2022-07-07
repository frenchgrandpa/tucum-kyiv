import {FC} from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import Group, {GroupData} from "@c/classes/Group";


interface Props {
    day: number;
}


const Container = styled.div`
  border: white 1px solid;
  width: 320px;
`;


const GroupContainer = styled.div`
  padding: 16px 32px
`;

const Title = styled.div`
  text-align: center;
  background: #23343C;
  font-family: var(--slim-font);
  font-size: 32px;
  line-height: 2.19;
  text-transform: uppercase;
  letter-spacing: 22px;
  padding-left: 22px;
`;

const Day: FC<Props> = ({day}) => {
    const today = dayjs().startOf("d");
    const groups: GroupData[] = [
        {
            from: today.hour(12),
            to: today.hour(13)
        },
        {
            from: today.hour(13),
            to: today.hour(14)
        },
        {
            from: today.hour(14),
            to: today.hour(15)
        },
        {
            from: today.hour(15),
            to: today.hour(16)
        }
    ];

    return (
        <Container>
            <Title>
                {today.day(day).format("ddd")}
            </Title>
            <GroupContainer>
                {groups.map((x, i) => <Group key={i} index={i} group={x}/>)}
            </GroupContainer>
        </Container>
    );
};

export default Day;
