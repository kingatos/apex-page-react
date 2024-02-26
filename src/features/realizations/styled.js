import styled from "styled-components";

export const SectionPhotos = styled.section`
  padding: 100px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 30px 0;
  }
`;

export const ContainerPhotos = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 30px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0;
  }
`;

export const StyledPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  justify-content: center;
`;

export const StyledColumn = styled.div`
  width: 30%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    padding: 0;
  }
`;

export const PhotosItem = styled.p`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 20px;
    margin: 20px 0;
  }
`;

export const StyledPhoto = styled.img`
  height: auto;
  max-width: 100%;
`;

export const TitleGalery = styled.div`
  display: grid;
  justify-items: stretch;
  justify-content: center;
  padding: 50px;
  font-weight: bold;
  font-size: 30px;
`;
