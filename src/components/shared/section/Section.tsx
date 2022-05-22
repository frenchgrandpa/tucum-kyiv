import {FC} from "react";
import Image, {StaticImageData} from "next/image";
import styled from "@emotion/styled";


interface Props {
    flip?: boolean;
    noPadding?: boolean;
    image: StaticImageData;
}


const Container = styled.div<{ direction: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  direction: ${p => p.direction};
  @media (min-width: 1440px) {
    margin-top: -48px;
    justify-content: space-between;
  }
`;

const TextContainer = styled.div<{noPadding?: boolean}>`
  margin-top: 64px;
  position: relative;
  direction: ltr;
  width: 570px;
  @media (min-width: 1440px) {
    width: 50%;
    padding-left: ${p => p.noPadding ? "0" : "150px"};
  }
`;

const ImageWrapper = styled.div`
  padding: 64px 32px;
  @media (min-width: 1440px) {
    padding: 0;
    height: 720px;
  }
`;

const Section: FC<Props> = ({flip, noPadding, image, children}) => {
    return (
        <Container direction={flip ? "rtl" : "ltr"}>
            <TextContainer noPadding={noPadding}>
                {children}
            </TextContainer>
            <ImageWrapper>
                <Image
                    alt={"Image"}
                    src={image}
                />
            </ImageWrapper>
        </Container>
    );
};

export default Section;

