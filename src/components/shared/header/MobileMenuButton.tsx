import {FC, useContext} from "react";
import styled from "@emotion/styled";

import {FaBars} from "react-icons/fa";
import {MobileMenuContext} from "../MobileMenuContextProvider";


interface Props {

}


const Button = styled.div`
  cursor: pointer;
  color: var(--accent-color);
  padding: 8px;
  margin: 16px 8px;
`;

const MobileMenuButton: FC<Props> = () => {
    const {toggleShow} = useContext(MobileMenuContext);
    return (
        <Button onClick={() => toggleShow()}>
            <FaBars style={{fontSize: "48px"}}/>
        </Button>
    );
};

export default MobileMenuButton;
