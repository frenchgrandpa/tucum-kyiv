import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";


interface Props {
}


const HideOnMobile = styled.div`
  @media (max-width: calc(768px - 1px)) {
    display: none;
  }
`;

export default HideOnMobile;
