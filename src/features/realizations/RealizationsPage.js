import { StyledContainer } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { TextWrapper, ImageWrapper } from "../../common/Section/styled";

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
  </StyledContainer>
);

export default Realizations;
