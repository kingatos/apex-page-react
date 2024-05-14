import styled from "styled-components";
import imageBackground1 from "./plytkapodlogowa.png";
import imageBackground2 from "./cienie.png";
import imageBackground3 from "./totalny remont.png";
import imageQuote from "./quote.png";

export const WrapperSectionGreyHomePage = styled.section`
  padding: 100px 100px;
  height: 730px;
  box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: 10s cubic-bezier(0.39, 0.58, 0.57, 1) 0s infinite normal none
    running slideBackground;

  @keyframes slideBackground {
    0% {
      background-image: url("${imageBackground1}");
    }
    50% {
      background-image: url("${imageBackground2}");
    }
    100% {
      background-image: url("${imageBackground3}");
    }
    5% {
      background-image: url("${imageBackground1}");
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 100px 20px 5px;
    height: auto;
  }
`;

export const SectionGreyBodyHomePage = styled.div`
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
  }
`;

export const ImageWrapperHomePage = styled.div`
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

export const TextWrapperHomePage = styled.div`
  flex: 1;
  padding: 50px 50px;
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
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 50px 0;
    align-items: center;
    text-align: center;
  }
`;

export const WrapperSectionHomePage = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.color.white};
`;

export const SectionBodyHomePage = styled.div`
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
  }
`;

export const SectionQuote = styled.section`
  font-size: 18px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.charade};
  padding: 100px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 30px 0;
    font-size: 16px;
  }
`;

export const SectionQuoteHeader = styled.h2`
  text-align: center;
  margin: 0 20px 50px 20px;
  font-size: 40px;
  font-weight: normal;
  color: ${({ theme }) => theme.color.charade};
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 23px;
    margin-bottom: 30px;
  }
`;

export const SectionQuoteWrapper = styled.div`
  width: 1240px;
  margin: auto;
  max-width: calc(100% - 60px);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: calc(100% - 30px);
  }
`;

export const SectionQuoteTestimonials = styled.div`
  margin-top: 20px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    -ms-grid-column: (1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SectionQuoteArcicle = styled.article`
  -webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
  padding: 40px 20px;
  font-size: 14px;
  line-height: 1.7;
  text-align: center;
  position: relative;
  animation-name: slide-in-right;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;

  @keyframes slide-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  ::after {
    content: "";
    position: absolute;
    display: block;
    top: -10px;
    left: 30px;
    background-color: ${({ theme }) => theme.color.dixie};
    background-image: url("${imageQuote}");
    background-size: 30px;
    background-position: center center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
  }
`;
export const SectionQuoteAuthor = styled.h3`
  font-size: 16px;
  margin: 15px 0;
  line-height: 1;
`;

export const SectionQuoteContent = styled.p`
  margin: 0;
  text-align: left;
`;
