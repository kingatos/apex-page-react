import styled from "styled-components";

export const ContactPharagraph = styled.p`
  padding: 20px;
  text-align: center;
`;

export const TelephonePharagraph = styled.div`
  padding: 20px;
  text-align: center;
  margin: 0 auto;
`;

export const BoldText = styled.strong`
  color: ${({ theme }) => theme.color.dixie};
`;

export const InfoPharagraph = styled.p`
  padding: 20px;
  text-align: center;
`;

export const FavItem = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

export const ButtonMailto = styled.button`
  margin-top: 10px;
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
    transform: scale(1.15);
  }

  &:active {
    background-color: ${({ theme }) => theme.color.trout};
  }
`;

export const MailtoInner = styled.a`
color: ${({ theme }) => theme.color.white};
text-decoration: none;
`;