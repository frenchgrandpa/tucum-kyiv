import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";
import Image, {StaticImageData} from "next/image";


interface Props {
    image: StaticImageData;
    name: string;
    title: string;
    phone: string;
}


const Text = styled.div`
  text-align: center;
  font-family: var(--slim-font);
  margin-top: 12px;
  margin-bottom: 24px;
`;

const Trainer: FC<Props> = ({image, name, title, phone}) => {
    return (
        <div style={{maxWidth: "320px"}}>
            <Image
                alt={"trainer"}
                src={image}
            />
            <Text>
                {name}<br/>
                {title}<br/>
                {phone}<br/>
            </Text>
        </div>
    );
};

export default Trainer;
