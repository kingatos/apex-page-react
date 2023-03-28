import {
  StyledContainer,
  ImageWrapper,
  TextWrapper,
} from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Img from "../../images/rusztowanie.jpg";

const AboutPage = () => (
  <StyledContainer>
    <Header title="Realizacje" />
    <Section>
      body=
      {
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
          <ImageWrapper>img={Img}</ImageWrapper>
        </>
      }
    </Section>
  </StyledContainer>
);

export default AboutPage;
