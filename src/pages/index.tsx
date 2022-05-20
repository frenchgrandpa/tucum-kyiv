import {FC} from "react";
import Image from "next/image";
import {GetServerSidePropsContext} from "next";
import styled from "@emotion/styled";
import PageLayout from "@c/layout/PageLayout";
import ContentBox from "@c/layout/ContentBox";
import Content from "@c/layout/Content";
import PreTitle from "@c/PreTitle";
import section1 from "@i/index/section1.jpg";
import {FaArrowRight} from "react-icons/fa";


interface Props {

}


const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 720px;
  margin-top: -48px;
`;

const TextContainer = styled.div`
  max-width: 50%;
  padding-left: 150px;
`;

const Title = styled.div`
  font-family: var(--title-font);
  font-weight: 300;
  font-size: 64px;
  line-height: 77px;
  margin: 28px 0;
`;

const Text = styled.div`
  font-size: 24px;
  line-height: 32px;
`;

const Number = styled.div`
  position: absolute;
  top: 32px;
  left: 0;
  opacity: 0.1;
  font-size: 240px;
  line-height: 240px;
`;

const ImageWrapper = styled.div`
  height: 720px;
`;

const PreTitleWrapper = styled.div`
  margin: 32px 0;
`;

const ReadMore = styled.div`
  color: var(--accent-color);
  margin-top: 48px;
  font-size: 18px;
  line-height: 22px;
`;

const Index: FC<Props> = () => {
    return (
        <PageLayout>
            <ContentBox>
                <Content>
                    <Section>
                        <Number>
                            01
                        </Number>
                        <TextContainer>
                            <PreTitleWrapper>
                                <PreTitle>
                                    About
                                </PreTitle>
                            </PreTitleWrapper>
                            <Title>
                                About Capoeira Tucum
                            </Title>
                            <Text>
                                Capoeira is a Brazilian martial art disguised as a dance and performed to musical
                                instruments and traditional Brazilian songs. It is comprised of specific offensive and
                                defensive movements and, unlike in other martial arts, the participant is constantly in
                                motion because of the basic movement, the ginga.
                            </Text>
                            <ReadMore>
                                Read more
                                <FaArrowRight style={{marginLeft: "16px", marginBottom: "-3px"}}/>
                            </ReadMore>
                        </TextContainer>
                        <ImageWrapper>
                            <Image
                                alt={"About"}
                                src={section1}
                            />
                        </ImageWrapper>
                    </Section>
                </Content>
            </ContentBox>
        </PageLayout>
    );
};

export default Index;



export async function getServerSideProps({locale}: GetServerSidePropsContext) {
    return {
        props: {
            locales: {
                ...await import(`@l/shared/${locale}.json`)
            }
        }
    };
}
