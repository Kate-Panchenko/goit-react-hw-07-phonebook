import styled from 'styled-components';

export const FilterForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 764px;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.21;
  color: ${props => props.theme.black};
`;

export const Input = styled.input`
  height: 40px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 10px;
  padding-left: 12px;
  width: 300px;
`;
