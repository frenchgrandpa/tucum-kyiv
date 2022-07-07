import styled from "@emotion/styled";
import {FC} from "react";
import Image from "next/image";

import img from "@i/logo.png";


interface Props {

}


const Wrapper = styled.div`
  height: 100px;
  width: 100px;
  @media (min-width: 1024px) {
    height: 200px;
    width: 200px;
  }
`;

const logo: FC<Props> = () => {
    return (
        <Wrapper>
            <Image
                alt={"Logo"}
                src={img}
                width={200}
                height={200}
            />
        </Wrapper>
    );
};

export default logo;
