import styled from "styled-components";

export const StyledHomeIcon = styled.img`
  display: block;
  width: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 160px;
  }
`;
