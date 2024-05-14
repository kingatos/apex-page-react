import styled from "styled-components";

export const StyledHomeIcon = styled.img`
  display: block;
  width: 100px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100px;
  }
`;
