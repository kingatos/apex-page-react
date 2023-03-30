import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 100px 50px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const SectionBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: auto;
  }
`;

export const TextWrapper = styled.div`
    text-align: start;
    padding: 100px;

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
`;

