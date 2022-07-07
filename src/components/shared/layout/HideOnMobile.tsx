import styled from "@emotion/styled";

const HideOnMobile = styled.div`
  @media (max-width: calc(768px - 1px)) {
    display: none;
  }
`;

export default HideOnMobile;
