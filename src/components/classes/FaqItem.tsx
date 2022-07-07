import {FC} from "react";
import styled from "@emotion/styled";


interface Props {
    title: string;
    text: string;
}


const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid #23343C;
  box-shadow: 0 20px 40px rgba(141, 147, 201, 0.08);
  border-radius: 10px;
  padding: 32px;
`;

const FaqTitle = styled.div`
  color: #313131;
  opacity: 0.88;
  margin-bottom: 32px;
`;
const FaqText = styled.div`
  color: #5f5f5f;
  font-family: var(--slim-font);
`;

const FaqItem: FC<Props> = ({title, text}) => {
    return (
        <Container>
            <FaqTitle>
                {title}
            </FaqTitle>
            <FaqText>
                {text}
            </FaqText>
        </Container>
    );
};

export default FaqItem;
