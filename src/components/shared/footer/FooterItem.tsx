import {FC} from "react";
import styled from "@emotion/styled";


interface Props {
    title: string;
}


const Title = styled.div`
  font-size: 24px;
  text-decoration: underline;
  font-family: var(--slim-font);
`;

const ChildContainer = styled.div`
  margin-top: 25px;
`;

const Container = styled.div`
`;

const FooterItem: FC<Props> = ({title, children}) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <ChildContainer>
                {children}
            </ChildContainer>
        </Container>
    );
};

export default FooterItem;
