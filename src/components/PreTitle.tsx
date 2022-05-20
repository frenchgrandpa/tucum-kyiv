import {FC} from "react";
import styled from "@emotion/styled";


interface Props {

}


const Container = styled.div`
  display: flex;
`;

const Line = styled.div`
  margin: 10px 32px 10px 0;
  width: 72px;
  height: 2px;
  background: var(--accent-color);
`;

const Text = styled.div`
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: var(--accent-color);
`;

const PreTitle: FC<Props> = ({children}) => {
    return (
        <Container>
            <Line/>
            <Text>
                {children}
            </Text>
        </Container>
    );
};

export default PreTitle;
