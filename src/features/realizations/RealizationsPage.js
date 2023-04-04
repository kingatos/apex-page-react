import { StyledContainer } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { TextWrapper, ImageWrapper } from "../../common/Section/styled";
import { SectionPhotos, ContainerPhotos, StyledPhotos, PhotosItem, StyledPhoto } from "./styled";

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
            <img src="./images/cienie.jpg" alt="efekt" />
          </ImageWrapper>
        </>
      }
    />

    <SectionPhotos>
      <ContainerPhotos>
      <StyledPhotos>
            <PhotosItem>
            <StyledPhoto src="./photos/photo.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo4.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo2.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo6.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo3.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo5.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo4.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo7.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo8.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo9.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo10.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo11.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo12.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo13.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo14.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo15.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo16.jpg"  alt="efekt" />
            </PhotosItem>

            <PhotosItem>
            <StyledPhoto src="./photos/photo12.jpg"  alt="efekt" />
            </PhotosItem>
        </StyledPhotos>
        </ContainerPhotos>
    </SectionPhotos>
  </StyledContainer>
);

export default Realizations;
