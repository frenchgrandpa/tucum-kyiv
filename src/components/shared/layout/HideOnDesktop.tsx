import {FC, useState, useEffect} from "react";
import styled from "@emotion/styled";


interface Props {
}


const HideOnDesktop = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export default HideOnDesktop;
