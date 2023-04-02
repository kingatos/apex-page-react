import { StyledContainer } from "../../common/Container/styled";
import { ImageWrapper, TextWrapper } from "../../common/Section/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";


const OfferPage = () => (
  <StyledContainer>
    <Header title="Oferta" />
    <Section
    body=
      {
        <>
      <ImageWrapper>
        <img src="./images/cienie.jpg" alt="efekt" />
      </ImageWrapper>
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
    />
  </StyledContainer>
);

export default OfferPage;
