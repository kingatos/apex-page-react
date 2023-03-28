import { StyledContainer, ImageWrapper, TextWrapper } from "../../common/Container/styled";
import Header from "../../common/Header";
import SectionGrey from "../../common/SectionGrey";
import Section from "../../common/Section";
import Button from "./Button";
import Img1 from "../../images/wiertarka.jpg";
import Img2 from "../../images/cienie.jpg";

const HomePage = () => (
  <StyledContainer>
    <Header title="O firmie" />
    <SectionGrey
      img={Img1}
      body={
        <>
          <TextWrapper>
            <h2>Budujemy dla Ciebie, z pasją i zaangażowaniem</h2>
            <p>
              Zakład Remontowo-Budowlany EDBUD to firma z ponad 30-letnim
              doświadczeniem na rynku budowlanym. Zajmujemy się kompleksowymi
              usługami remontowo-budowlanymi, w tym robotami związanymi z
              wykończeniem budynków mieszkalnych i niemieszkalnych, rozbiórką i
              burzeniem obiektów budowlanych, instalacjami elektrycznymi i
              wodno-kanalizacyjnymi, tynkowaniem, stolarką budowlaną, malowaniem
              oraz wykonaniem pozostałych robót budowlanych wykończeniowych.
            </p>
          </TextWrapper>
        </>
      }
    />

    <Section>
      <ImageWrapper>img={Img2}</ImageWrapper>
      body=
      {
        <>
          <TextWrapper>
            <h2>Solidność, doświadczenie, profesjonalizm</h2>
            <p>
              Jesteśmy firmą, która stawia na solidność, jakość i
              profesjonalizm, a nasza praca jest zawsze zgodna z najwyższymi
              standardami.
            </p>
            <Button>Zobacz więcej</Button>
          </TextWrapper>
        </>
      }
    </Section>
  </StyledContainer>
);

export default HomePage;
