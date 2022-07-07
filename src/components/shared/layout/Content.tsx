import {FC} from "react";
import styled from "@emotion/styled";


interface Props {

}


const ContentBox = styled.div`
  display: flex;
  justify-content: center;
`;

const _Content = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  //border: red 1px solid;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 128px;
  }
`;

const Content: FC<Props> = ({children}) => {
    return (
        <ContentBox>
            <_Content>
                {children}
            </_Content>
        </ContentBox>
    );
};

export default Content;
