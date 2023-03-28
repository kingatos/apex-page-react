import styled from "styled-components";

export const StyledContainer = styled.main`
    margin: 0;
    max-width: 100%;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 30px;
  }
`;
