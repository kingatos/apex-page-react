import {
  StyledContainer,
  ImageWrapper,
  TextWrapper,
} from "../../common/Container/styled";
import Header from "../../common/Header/index";
import Section from "../../common/Section/index";
import Img3 from "../../images/wiertarka.jpg";

const AboutPage = () => (
  <StyledContainer>
    <Header title="O firmie" />
    <Section img={<ImageWrapper img={Img3} />} body={<TextWrapper>
        <h2>Solidność, doświadczenie, profesjonalizm</h2>
        <p>
          Zakład Remontowo-Budowlany EDBUD to firma z wieloletnim doświadczeniem
          na rynku budowlanym, kompleksowo realizująca projekty remontowe oraz
          modernizacyjne. Nasze usługi obejmują m.in. remonty mieszkań, domów
          jednorodzinnych oraz lokali użytkowych, a także modernizacje obiektów
          przemysłowych. Działamy szybko i sprawnie, zapewniając najwyższą
          jakość wykonywanych prac oraz konkurencyjne ceny. Zaufaj nam i
          przekonaj się, że remonty mogą być łatwe i przyjemne!
        </p>
    </TextWrapper>
     }
    />
  </StyledContainer>
);

export default AboutPage;
