import { StyledContainer } from "../../common/Container/styled";
import { ImageWrapper, TextWrapper } from "../../common/Section/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import PhotoEffect from "../.././images/cienie.jpg";

const OfferPage = () => (
  <StyledContainer>
    <Header title="Oferta" />
    <Section
      body={
        <>
          <ImageWrapper>
            <img src={PhotoEffect} alt="efekt" />
          </ImageWrapper>
          <TextWrapper>
              <h3>
                <strong>Usługi architektoniczne</strong>
              </h3>
              <p>
                Nasz zespół inżynierów budowlanych oferuje kompleksowe usługi
                inżynieryjne, obejmujące projektowanie konstrukcji, instalacji,
                instalacji sanitarnych i elektrycznych. Zapewniamy wsparcie na
                każdym etapie procesu budowlanego, dbając o efektywność,
                bezpieczeństwo i zgodność z obowiązującymi normami i przepisami.
              </p>
              <h3>
                <strong>Konsultacje Projektowe</strong>
              </h3>
              <p>
                Oferujemy konsultacje projektowe dla klientów, którzy potrzebują
                profesjonalnej pomocy w planowaniu i realizacji swoich
                projektów. Nasz zespół ekspertów doradzi Ci w wyborze
                najlepszych rozwiązań projektowych, zapewniając wsparcie i
                doradztwo na każdym etapie projektu.
              </p>
              <h3>
                <strong>Doradztwo Zrównoważonego Rozwoju</strong>
              </h3>
              <p>
                Jako firma świadoma społecznie i ekologicznie, oferujemy również
                doradztwo zrównoważonego rozwoju dla naszych klientów. Pomagamy
                w opracowaniu projektów, które są przyjazne dla środowiska,
                energooszczędne i zgodne z zasadami zrównoważonego rozwoju.
              </p>
          </TextWrapper>
        </>
      }
    />
  </StyledContainer>
);

export default OfferPage;
