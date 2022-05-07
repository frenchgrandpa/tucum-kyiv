import styled from "@emotion/styled";
import {FC, useEffect, useState} from "react";
import Image from "next/image";

import img from "@i/logo.png";


interface Props {

}

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
`;



const logo: FC<Props> = () => {
    return (
        <Wrapper >
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
