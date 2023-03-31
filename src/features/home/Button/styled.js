import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.doveGray};
  color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.black};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ theme }) => theme.color.trout};
  }
`;