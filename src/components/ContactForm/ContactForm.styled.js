import styled from 'styled-components';
import { Field as FormikField, Form as FormikForm } from 'formik';

export const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.22;
  color: ${props => props.theme.black};
  margin-bottom: 36px;
  text-align: center;
`;

export const Form = styled(FormikForm)`
  border: 1px solid ${props => props.theme.border};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 42px;
  margin-bottom: 36px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.21;
  color: ${props => props.theme.black};
`;

export const Field = styled(FormikField)`
  height: 40px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 10px;
  padding-left: 12px;
`;

export const Button = styled.button`
  align-self: center;
  padding: 12px 36px;
  background-color: ${props => props.theme.accent};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.21;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => props.theme.hover};
  }
`;
