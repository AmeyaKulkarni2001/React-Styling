import styled from "styled-components";

const FormControl = styled.div`

  margin: 0.5rem 0;


 & label {
  color: ${props => props.invalid && 'red'};
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

 & input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}
`;
export default FormControl;