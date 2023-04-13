import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 764px;
  margin: 36px auto 0 auto;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Message = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.22;
  color: ${props => props.theme.black};
  margin-top: 24px;
  text-align: center;
`;
