import {FC} from "react";
import styled from "@emotion/styled";


interface Props {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
}


const Container = styled.div`
`;

export const Label = styled.div`
  font-family: var(--slim-font);
  font-size: 32px;
  line-height: 0.88;
  letter-spacing: 0.25px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  background: #23343C;
  border: 1px solid #FFFFFF;
  font-size: 32px;
  line-height: 0.88;
  letter-spacing: 0.25px;
  color: #D8D8D8;
  height: 100px;
  padding-left: 36px;

`;

const FormInput: FC<Props> = ({name, placeholder, type, label}) => {
    return (
        <Container>
            <Label>
                {label}
            </Label>
            <Input id={name} name={name} placeholder={placeholder} type={type} required/>
        </Container>
    );
};

export default FormInput;
