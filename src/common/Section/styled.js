import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.color.white};
`;

export const SectionBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  animation-name: slide-in-right;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes slide-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    padding: 0px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
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
