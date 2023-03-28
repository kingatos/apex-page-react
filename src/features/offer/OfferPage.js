import { StyledContainer, ImageWrapper, TextWrapper } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Img from "../../images/pracawre.jpg";

const AboutPage = () => (
  <StyledContainer>
    <Header title="Oferta" />
    <Section>
      <ImageWrapper>img={Img}</ImageWrapper>
      body=
      {
        <>
          <TextWrapper>
            <ul>
              <h3>Usługi budowlane:</h3>
              <ul>
                <li>modernizacja i przebudowa istniejących budynków</li>
                <li>rozbiórka i burzenie obiektów budowlanych</li>
                <li>wykonywanie instalacji elektrycznych</li>
                <li>
                  wykonywanie instalacji wodno-kanalizacyjnych, cieplnych,
                  gazowych i klimatyzacyjnych
                </li>
                <li>wykonanie konstrukcji i pokryć dachowych</li>
              </ul>
              <h3>Usługi wykończeniowe:</h3>
              <ul>
                <li>tynkowanie</li>
                <li>zakładanie stolarki budowlanej</li>
                <li>posadzkarstwo</li>
                <li>malowanie i szklenie</li>
                <li>wykonanie pozostałych robót budowlanych wykończeniowych</li>
              </ul>
              <h3>Doradztwo techniczne:</h3>
              <ul>
                <li>
                  działalność w zakresie inżynierii i związane z nią doradztwo
                  techniczne
                </li>
                <li>doradztwo w zakresie wyboru materiałów budowlanych</li>
                <li>pomoc w uzyskaniu niezbędnych pozwoleń i zezwoleń</li>
              </ul>
            </ul>
          </TextWrapper>
        </>
      }
    </Section>
  </StyledContainer>
);

export default AboutPage;
