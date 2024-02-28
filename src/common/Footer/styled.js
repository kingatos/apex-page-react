import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.alto};
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 85px;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-wrap:wrap;
  }
`;

export const StyledForm = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.alto};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: none;
  margin-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 15px;
  }
`;

export const StyledButton = styled.button`
  width: 25%;
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.rollingStone};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ theme }) => theme.color.trout};
  }
`;

export const StyledLabel = styled.label`
  padding: 20px 0;
  font-size: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
  }
`;

export const StyledPlace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    text-align: center;
    text-align: center;
    font-size: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 60px;
  }
`;

export const StyledButtonPhone = styled.a`
  padding: 10px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-items: center;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.rollingStone};
    transform: scale(1.2);
  }

  &:active {
    background-color: ${({ theme }) => theme.color.trout};
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  gap: 24px;
  padding: 40px 0 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.slateGray};
  text-decoration: none;
`;

export const StyledIcon = (Icon) => styled(Icon)`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.color.black};
  transition: 0.5s;

  &:hover {
    fill: ${({ theme }) => theme.color.scienceBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 32px;
    height: 32px;
  }
`;
