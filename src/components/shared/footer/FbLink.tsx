import {FC} from "react";
import styled from "@emotion/styled";
import {FaFacebook} from "react-icons/fa";


interface Props {

}


const Wrapper = styled.a`
  font-size: 40px;
  color: white;
  cursor: pointer;
`;

const FbLink: FC<Props> = () => {
    return (
        <Wrapper target="_blank" href={"https://www.facebook.com/UkrCentreCapoeira/"}>
            <FaFacebook/>
        </Wrapper>
    );
};

export default FbLink;
