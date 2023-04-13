import styled from "styled-components";

export const WrapperSectionGray = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.color.alto};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const SectionGrayBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    padding: 0px;
    margin: 0px auto;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    order: -1;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
    padding-bottom: 70px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 50px 0;
    align-items: center;
    text-align: center;
  }
`;
