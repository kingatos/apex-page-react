import { StyledContainer } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { TextWrapper, ImageWrapper } from "../../common/Section/styled";
import { SectionPhotos, ContainerPhotos, StyledPhotos, PhotosItem, StyledPhoto } from "./styled";
import PhotoEffect from "../.././images/cienie.jpg";
import Photo from "../.././photos/photo.jpg";
import Photo4 from "../.././photos/photo4.jpg";
import Photo2 from "../.././photos/photo2.jpg";
import Photo6 from "../.././photos/photo6.jpg";
import Photo3 from "../.././photos/photo3.jpg";
import Photo5 from "../.././photos/photo5.jpg";
import Photo7 from "../.././photos/photo7.jpg";
import Photo8 from "../.././photos/photo8.jpg";
import Photo9 from "../.././photos/photo9.jpg";
import Photo10 from "../.././photos/photo10.jpg";
import Photo11 from "../.././photos/photo11.jpg";
import Photo12 from "../.././photos/photo12.jpg";
import Photo13 from "../.././photos/photo13.jpg";
import Photo14 from "../.././photos/photo14.jpg";
import Photo15 from "../.././photos/photo15.jpg";
import Photo16 from "../.././photos/photo16.jpg";

const Realizations = () => (
  <StyledContainer>
    <Header title="Realizacje" />
    <Section
      body={
        <>
          <TextWrapper>
            <p>
              Nasza firma w ciągu 30 lat swojej działalności zrealizowała wiele
              zróżnicowanych zadań, w tym, renowacje budynków zabytkowych,
              kompleksowe wykończenia wnętrz, a także prace konstrukcyjne i
              remontowe na wielu obiektach przemysłowych i użyteczności
              publicznej. Poniżej przedstawiamy część z naszych projektów, które
              w pełni oddają nasze umiejętności oraz zadowolenie naszych
              klientów.
            </p>
          </TextWrapper>
          <ImageWrapper>
            <img src={PhotoEffect} alt="efekt" />
          </ImageWrapper>
        </>
      }
    />

    <SectionPhotos>
      <ContainerPhotos>
      <StyledPhotos>
            <PhotosItem>
            <StyledPhoto src={Photo} alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo4}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo2} alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo6}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo3} alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo5}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo4}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo7} alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo8}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo9}   alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo10}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo11}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo12}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo13}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo14}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo15}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo16}  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src={Photo11}  alt="efekt" />
            </PhotosItem>
        </StyledPhotos>
        </ContainerPhotos>
    </SectionPhotos>
  </StyledContainer>
);

export default Realizations;
