import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 10px 0;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`

export const SectionBody = styled.div`
  padding: 20px;
`;