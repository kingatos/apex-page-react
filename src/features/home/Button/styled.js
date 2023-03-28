import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #f36f21;
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #f36f21;
    border: 2px solid #f36f21;
  }
`;